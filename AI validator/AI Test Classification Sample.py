import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.tree import DecisionTreeClassifier

import warnings
warnings.simplefilter(action='ignore')

#==============================================================================================================================
                                                        # Data Preporcessing
#==============================================================================================================================

dataset = pd.read_csv("credit_risk_data.csv")  #add dataset path

# Create one-hot encoded variables
one_hot_encoder = OneHotEncoder()

# Fit and transform the categorical columns
one_hot_encoded_variables = one_hot_encoder.fit_transform(dataset[['Home_Ownership', 'Marital_Status', 'Education_Level']]).toarray()

# Create a DataFrame from the one-hot encoded variables with proper column names
new_df = pd.DataFrame(one_hot_encoded_variables, columns=one_hot_encoder.get_feature_names_out())

# Add the numerical columns to the DataFrame
numerical_columns = dataset.select_dtypes(include=['float64', 'int64']).columns
new_df[numerical_columns] = dataset[numerical_columns]

# Map 'Sex' column to numeric values
new_df['Sex'] = dataset['Sex'].map({'MALE': 0, 'FEMALE': 1})

X1 = pd.read_csv("credit_risk_D1.csv")
X2 = pd.read_csv("credit_risk_D2.csv")
#============================================================================================================================
                                                    # Model Implementation
#============================================================================================================================
X_train, X_test, y_train, y_test = train_test_split(new_df.drop("Defaulted", axis=1),new_df["Defaulted"], test_size=0.25)
y_true = new_df["Defaulted"]
data = new_df.drop("Defaulted", axis=1)
Features = data.columns

# train and test the model
model = DecisionTreeClassifier()
model.fit(X_train, y_train)
y_pred = model.predict(data)
