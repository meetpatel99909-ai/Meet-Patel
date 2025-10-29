import os
import openai
def OpenAIEnviron():
    
    # Set your OpenAI API key
    os.environ["OPENAI_API_KEY"] = 'sk-proj-PiXHIoPwRdENTud477rDT3BlbkFJ9Hc40234fpQuMl73L6uD'
    return openai.OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

