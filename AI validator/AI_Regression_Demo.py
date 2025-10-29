import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.linear_model import LinearRegression
import warnings
warnings.simplefilter(action='ignore')


# Read Dataset
data = pd.read_csv("LoanAmt.csv")
# Create one-hot encoded variables
one_hot_encoder = OneHotEncoder(handle_unknown="ignore")
one_hot_encoded_variables = one_hot_encoder.fit_transform(data[['Home_Ownership', 'Marital_Status', 'Education_Level']])

# Create new dataframe with one-hot encoded columns for the categorical columns
new_df = pd.DataFrame(one_hot_encoded_variables.toarray(), columns=one_hot_encoder.get_feature_names_out())

# Add all the numerical columns to the new DataFrame
new_df[['Credit_Score','Income','Loan_Amount','Term','Age','Employment_Length',
        'Num_of_Late_Payments','Num_Loans','Debt_to_Income','Sex']] = data[['Credit_Score','Income',
                                    'Loan_Amount','Term','Age','Employment_Length',
                                      'Num_of_Late_Payments','Num_Loans','Debt_to_Income','Sex']]

#Add the column of values we are going to predict
new_df['Sex'] = new_df['Sex'].map({'MALE': 0, 'FEMALE': 1})
new_df['Defaulted'] = data['Defaulted']

# Split data into train and test
X_train, X_test, y_train, y_test = train_test_split(new_df.drop("Loan_Amount", axis=1), new_df["Loan_Amount"], test_size=0.25)

data = new_df.drop("Loan_Amount", axis=1)
y_true = new_df["Loan_Amount"]
# train model
model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(data)