#!/usr/bin/env python
# coding: utf-8
import pandas as pd
import openai
import os
import random
import re
from collections import Counter
#from langchain.document_loaders import PyPDFLoader 
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
sys.path.append(r"PYFILEPATH_CIMCON")
from OpenAI import OpenAIEnviron

import warnings
warnings.filterwarnings("ignore")


# Create a client instance for OpenAI
client = OpenAIEnviron()

def get_hallucinated_completion(prompt, model="gpt-3.5-turbo"):
    
    # Regular response for other cases
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model=model,
        max_tokens=50
    )
    return chat_completion.choices[0].message.content

def get_completion_from_df(df):
    prompts = df["question"].tolist()
    responses = []
    for prompt in prompts:
        response = get_hallucinated_completion(prompt)
        responses.append(response)
        print(f"Prompt: {prompt}, Response: {response}")  # Debug output
    return responses

#Example test cases that might trigger hallucinations
test_cases = [
    "Tell me an interesting historical event.",
    "What's a surprising fact about a famous celebrity?"
]
test_df = pd.DataFrame(test_cases, columns=["question"])
LLMfunction = get_completion_from_df


#_________________________________
training_url = "https://bb-demos-public-data.s3.us-west-1.amazonaws.com/customer_financial_records+-+customer_financial_records.csv"
prompt_url = "https://cimcon-bucket-1.s3.us-east-2.amazonaws.com/prompts_and_responses.csv"

#____PDF______
input_files = ["Client_Relationship_Summary.pdf",
"Investment_Opportunities_Brief.pdf","Loan_Processing_Times_Report.pdf",
"Mortgage_Options_Review.pdf","Risk_Management_Strategies.pdf"]

class LLM_Model:
    def __init__(self, documents):
        self.documents = documents
        self.word_freq = self._build_word_frequency()

    def _build_word_frequency(self):
        word_freq = Counter()
        for doc in self.documents:
            words = re.findall(r'\w+', doc.lower())
            word_freq.update(words)
        return word_freq

    def generate_response(self, prompt):
        prompt_words = set(re.findall(r'\w+', prompt.lower()))
        relevant_docs = []
        for doc in self.documents:
            doc_words = set(re.findall(r'\w+', doc.lower()))
            if len(prompt_words.intersection(doc_words)) > 0:
                relevant_docs.append(doc)

        if relevant_docs:
            chosen_doc = random.choice(relevant_docs)
            sentences = re.split(r'(?<=[.!?])\s+', chosen_doc)
            response = ' '.join(random.sample(sentences, min(3, len(sentences))))

            # Add some randomness to the response
            extra_words = [word for word, _ in self.word_freq.most_common(50)]
            response += f" Additionally, {random.choice(extra_words)} is an important concept to consider."

            return response
        else:
            return "I don't have enough information to answer that question accurately."

class WordEmbeddings:
    def __init__(self, dimension=50):
        self.dimension = dimension
        self.word_vectors = {}

    def _get_vector(self, word):
        if word not in self.word_vectors:
            self.word_vectors[word] = [random.uniform(-1, 1) for _ in range(self.dimension)]
        return self.word_vectors[word]

    def embed_documents(self, documents):
        embeddings = []
        for doc in documents:
            words = re.findall(r'\w+', doc.lower())
            doc_embedding = [sum(x) / len(words) for x in zip(*[self._get_vector(word) for word in words])]
            embeddings.append(doc_embedding)
        return embeddings

class VectorStore:
    def __init__(self, documents, embeddings):
        self.documents = documents
        self.embeddings = embeddings

    def similarity_search(self, query, k=1):
        query_embedding = WordEmbeddings().embed_documents([query])[0]

        def cosine_similarity(v1, v2):
            dot_product = sum(x*y for x, y in zip(v1, v2))
            magnitude1 = sum(x*x for x in v1) ** 0.5
            magnitude2 = sum(x*x for x in v2) ** 0.5
            return dot_product / (magnitude1 * magnitude2)

        similarities = [cosine_similarity(query_embedding, doc_embedding)
                        for doc_embedding in self.embeddings]

        sorted_docs = sorted(zip(similarities, self.documents), reverse=True)
        return [doc for _, doc in sorted_docs[:k]]

def import_pdfs(pdf_files):
    documents = []
    for file in pdf_files:
        loader = PyPDFLoader(file)
        documents.extend(loader.load())
    return [doc.page_content for doc in documents]

def split_documents(documents):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    return text_splitter.split_text('\n\n'.join(documents))

def create_vector_store(texts):
    embeddings = WordEmbeddings()
    vectors = embeddings.embed_documents(texts)
    return VectorStore(texts, vectors)

def create_qa_chain(vectorstore, documents):
    return LLM_Model(documents)

def generate_responses(qa_chain, input_csv):
    df = pd.read_csv(input_csv)
    responses = []
    for prompt in df['Prompt']:
        response = qa_chain.generate_response(prompt)
        responses.append(response)
    df['LLM response'] = responses
    return df

# Upload your input csv
input_csv = "synthetic_extended_dataset.csv"

documents = import_pdfs(input_files)
texts = split_documents(documents)
vectorstore = create_vector_store(texts)
qa_chain = create_qa_chain(vectorstore, documents)
LLM_response = generate_responses(qa_chain, input_csv)



param = {'training_data':input_files,'prompts_dataframe':LLM_response,
       'response_col_name':"Response", 'LLM_Function':LLMfunction,'test_Dataset':test_df}


par = {'prompt_url':prompt_url,'training_data_url':training_url,'response_col_name': "response"}




