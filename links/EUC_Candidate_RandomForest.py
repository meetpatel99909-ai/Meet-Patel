#!/usr/bin/env python
# coding: utf-8

# ## Classification Model to predict Criticality of File for EUC Insight product of CIMCON 
# ## Done by Sandip Karia

# In[1]:


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
#%matplotlib inline


# In[2]:


df = pd.read_csv('Data\\File_Scan_Details_1.csv')


# In[3]:


df.head()


# In[4]:


df.info()


# In[5]:


df.columns


# # DELETING VARIABLES THAT DOESNT CONTRIBUTE TOWARDS EUC Decision

# In[6]:


df.drop(['ObjectId'],axis=1,inplace=True)

# Intead of drop, select columns and delete rest

#'Critical', '# of Formulas', '# of Formulas with Errors','# of Warnings', '# of Array Formulas',
# '# of Formula formatted as Text', '# of Formulas with Constants','# of Formulas with Blank Cells',
# '# of Formulas with Text Cells', '# of Sheets', '# of Hidden Sheets'
#         ,'# of Very Hidden Sheets' ,'# of Hidden Rows' ,'# of Hidden Columns' ,'# of Named Items' ,'# of Validated Cells'
#         ,'# of Macros', '# of Queries','# of VBA Queries', '# of Invisible Cells','# of Protected Worksheets',
#       '# of Formulas with Hidden Cell', '# of Internal links',
#      '# of External links', '# of Broken Link Excel Files'

# , 'Risk Level' we will take next but not in MVP


# In[7]:


df.columns


# In[8]:


df.info()


# # Converting Categorical Features

# In[9]:


Critical=pd.get_dummies(df['Critical'],prefix='Cr', drop_first=True)

Critical
# In[10]:


df.drop(['Critical'],axis=1,inplace=True)


# In[11]:


df.columns


# In[12]:


df=pd.concat([df,Critical],axis=1)


# In[13]:


df.columns


# In[14]:


df.head()


# In[15]:


df.info()


# ### Replace some NULL or blank, We cannot take mod or average here as that can change prediction

# In[16]:


df['# of Formulas']= df['# of Formulas'].replace(np.nan,0)


# In[17]:


df['# of Formulas with Errors']= df['# of Formulas with Errors'].replace(np.nan,0)


# In[18]:


df['# of Warnings']= df['# of Warnings'].replace(np.nan,0)


# In[19]:


df['# of Array Formulas']= df['# of Array Formulas'].replace(np.nan,0)


# In[20]:


df['# of Formula formatted as Text']= df['# of Formula formatted as Text'].replace(np.nan,0)


# In[21]:


df['# of Formulas with Constants']= df['# of Formulas with Constants'].replace(np.nan,0)


# In[22]:


df['# of Formulas with Blank Cells']= df['# of Formulas with Blank Cells'].replace(np.nan,0)


# In[23]:


df['# of Formulas with Text Cells']= df['# of Formulas with Text Cells'].replace(np.nan,0)

df['# of Sheets']= df['# of Sheets'].replace(np.nan,0)
df['# of Hidden Sheets']= df['# of Hidden Sheets'].replace(np.nan,0)
df['# of Very Hidden Sheets']= df['# of Very Hidden Sheets'].replace(np.nan,0)
df['# of Hidden Rows']= df['# of Hidden Rows'].replace(np.nan,0)
df['# of Hidden Columns']= df['# of Hidden Columns'].replace(np.nan,0)
df['# of Named Items']= df['# of Named Items'].replace(np.nan,0)
df['# of Validated Cells']= df['# of Validated Cells'].replace(np.nan,0)
df['# of Macros']= df['# of Macros'].replace(np.nan,0)
df['# of Queries']= df['# of Queries'].replace(np.nan,0)
df['# of VBA Queries']= df['# of VBA Queries'].replace(np.nan,0)
df['# of Invisible Cells']= df['# of Invisible Cells'].replace(np.nan,0)
df['# of Protected Worksheets']= df['# of Protected Worksheets'].replace(np.nan,0)
df['# of Charts']= df['# of Charts'].replace(np.nan,0)


# In[24]:


df['# of Formulas with Hidden Cell']= df['# of Formulas with Hidden Cell'].replace(np.nan,0)


# In[25]:


df['# of Internal links']= df['# of Internal links'].replace(np.nan,0)


# In[26]:


df['# of External links']= df['# of External links'].replace(np.nan,0)


# In[27]:


df['# of Broken Link Excel Files']= df['# of Broken Link Excel Files'].replace(np.nan,0)

# Need to replace for other varaibles also whch are not covered in above
# '# of Formulas', '# of Formulas with Errors','# of Warnings', '# of Array Formulas',
# '# of Formula formatted as Text', '# of Formulas with Constants','# of Formulas with Blank Cells',
# '# of Formulas with Text Cells', '# of Sheets', '# of Hidden Sheets'
#         ,'# of Very Hidden Sheets' ,'# of Hidden Rows' ,'# of Hidden Columns' ,'# of Named Items' ,'# of Validated Cells'
#         ,'# of Macros', '# of Queries','# of VBA Queries', '# of Invisible Cells','# of Protected Worksheets',
#       '# of Formulas with Hidden Cell', '# of Internal links',
#      '# of External links', '# of Broken Link Excel Files'


# In[28]:


df


#
# # Let's try Random Forest which is best for such data

# In[29]:


mSample = df.Cr_Yes.value_counts()
if mSample[0]>=mSample.iloc[1]:
    mSampleV=mSample.iloc[1]
else:
    mSampleV=mSample.iloc[0]


# In[30]:


## Importing resample from *sklearn.utils* package.
from sklearn.utils import resample

# Separate the case of pass and fail
df_cr_fail = df[df.Cr_Yes == 0]
df_cr_pass = df[df.Cr_Yes == 1]

##Upsample the yes-subscribed cases.
df_minority_upsampled = resample(df_cr_fail,
replace=True, # sample with replacement
n_samples=mSampleV) ## Same as 1

# Need to make this 567 dynamic...

# Combine majority class with upsampled minority class
new_df = pd.concat([df_cr_pass, df_minority_upsampled])


# In[31]:


from sklearn.utils import shuffle
new_df = shuffle(new_df)


# In[32]:


# Assigning list of all column names in the DataFrame
X_features = list( new_df.columns )
# Remove the response variable from the list
X_features.remove( 'Cr_Yes' )

X_features


# In[33]:


# All Discovery data (one master files if in copy group)

X = new_df[X_features]
Y = new_df.Cr_Yes


# In[34]:


from sklearn.model_selection import train_test_split
train_X, test_X, train_y, test_y = train_test_split( X, Y, test_size = 0.1, random_state = 42 )


# # ROC Cure

# In[35]:


from sklearn import metrics
import matplotlib.pyplot as plt

## The method takes the three following parameters
## model: the classification model
## test_X: X features of the test set
## test_y: actual labels of the test set
## Returns
## - ROC Auc Score
## - FPR and TPRs for different threshold values
def draw_roc_curve( model, test_X, test_y ):
    ## Creating and initializing a results DataFrame with actual labels
    test_results_df = pd.DataFrame( { 'actual': test_y } )
    test_results_df = test_results_df.reset_index()
    # predict the probabilities on the test set
    predict_proba_df = pd.DataFrame( model.predict_proba( test_X ) )
    ## selecting the probabilities that the test example belongs to class 1
    test_results_df['chd_1'] = predict_proba_df.iloc[:,1:2]
    ## Invoke roc_curve() to return the fpr, tpr and threshold values.
    ## threshold values contain values from 0.0 to 1.0
    fpr, tpr, thresholds = metrics.roc_curve( test_results_df.actual, test_results_df.chd_1, drop_intermediate = False )
    ## Getting the roc auc score by invoking metrics.roc_auc_score method
    auc_score = metrics.roc_auc_score( test_results_df.actual, test_results_df.chd_1 )
    ## Setting the size of the plot
    plt.figure(figsize=(8, 6))
    ## plotting the actual fpr and tpr values
    plt.plot( fpr, tpr, label='ROC curve (area = %0.2f)' % auc_score )
    ## plotting th diagnoal line from (0,1)
    plt.plot([0, 1], [0, 1], 'k--')
    plt.xlim([0.0, 1.0])
    plt.ylim([0.0, 1.05])
    ## Setting labels and titles
    plt.xlabel('False Positive Rate or [1 - True Negative Rate]')
    plt.ylabel('True Positive Rate')
    plt.title('Receiver operating characteristic example')
    plt.legend(loc="lower right")
    plt.show()
    return auc_score, fpr, tpr, thresholds


# ## Random Forest

# In[36]:


#new_df.to_csv('trainingfile.csv', index=False)
#import shutil
#import os
#shutil.move(file_to_move, os.path.join('Data', 'trainingfile'))


# In[37]:


## Importing Random Forest Classifier from the sklearn.ensemble
from sklearn.ensemble import RandomForestClassifier
## Initializing the Random Forest Classifier with max_dept and n_estimators
radm_clf = RandomForestClassifier( max_depth=10, n_estimators=10)
radm_clf.fit( train_X, train_y )


# In[ ]:





# In[38]:


#_, _, _, _ = draw_roc_curve( radm_clf, test_X, test_y );


# In[39]:


## Configuring parameters and values for searched
tuned_parameters = [{'max_depth': [10, 15],
'n_estimators': [10,20],
'max_features': ['sqrt', 'auto']}]

## Initializing the RF classifier
radm_clf = RandomForestClassifier()

## Configuring search with the tunable parameters
from sklearn.model_selection import GridSearchCV

clf = GridSearchCV(radm_clf,
tuned_parameters,
cv=5,
scoring='roc_auc')

## Fitting the training set
clf.fit(train_X, train_y )

# Where to pass test dataset and mainly how to get that data back that which are EUCs.


# In[40]:


train_X


# In[41]:


clf.best_score_


# In[42]:


bestparams=clf.best_params_
bestparams
# How to take this parameter in varable and pass


# In[43]:


## Initializing the Random Forest Mode with the optimal values
radm_clf = RandomForestClassifier( max_depth=bestparams['max_depth'], n_estimators=bestparams['n_estimators'], max_features =bestparams['max_features'])

## Fitting the model with the training set
radm_clf.fit( train_X, train_y )


# In[44]:


#_, _, _, _ = draw_roc_curve( clf, test_X, test_y )


# In[45]:


## Importing the metrics

import seaborn as sn

## Defining the matrix to draw the confusion metrix from actual and predicted class labels
def draw_cm( actual, predicted ):
    # Invoking confusion_matrix from metric package. The matrix will oriented as [1,0] i.e.
    # the classes with label 1 will be reprensted the first row and 0 as second row
    cm = metrics.confusion_matrix( actual, predicted ) #, [1,0]
    ## Confustion will be plotted as heatmap for better visualization
    ## The lables are configured to better interpretation from the plot
    sn.heatmap(cm, annot=True, fmt='.2f',
    xticklabels = ["Critical", "Not Critical"] ,
    yticklabels = ["Critical", "Not Critical"] )
    plt.ylabel('True label')
    plt.xlabel('Predicted label')
    plt.show()


# In[46]:


## Predicting on test set
pred_y = radm_clf.predict(test_X)
## Drawing the confusion matrix for KNN model
# draw_cm( test_y, pred_y )


# In[47]:


print( metrics.classification_report( test_y, pred_y ) )


# ### Feature Importance

#
# ##### Gini Importance / Mean Decrease in Impurity (MDI)
# MDI counts the times a feature is used to split a node, weighted by the number of samples it splits:
# Gini Importance or Mean Decrease in Impurity (MDI) calculates each feature importance as the sum over the number of splits (across all tress) that include the feature, proportionally to the number of samples it splits.

# In[48]:


import numpy as np

# Create a dataframe to store the featues and their corresponding importances
feature_rank = pd.DataFrame( { 'feature': train_X.columns,
'importance': radm_clf.feature_importances_ } )

## Sorting the features based on their importances with most important feature at top.
feature_rank = feature_rank.sort_values('importance', ascending = False)
plt.figure(figsize=(8, 6))

# plot the values
sn.barplot( y = 'feature', x = 'importance', data = feature_rank );


# In[49]:


feature_rank['cumsum'] = feature_rank.importance.cumsum() * 100
feature_rank.head(10)


# # So overall Random Forest is giving best result  for this dataset and above feature importantce show that # of Formulas.
# # No of Formulas, # of Internal Links and # of formulas with blank cells has top 58% waightage. # of Warning and # of Formula with Text Cell reach to 86%.

# In[50]:


df_DiscoveryData = pd.read_csv('Data\\File_Scan_Details_2.csv')
df_DiscoveryData.drop(['ObjectId'],axis=1,inplace=True)
df_DiscoveryData.columns
df_DiscoveryData.info()


# In[58]:


df_DiscoveryDataFinal=pd.read_csv('Data\\File_Scan_Details_2.csv')
df_DiscoveryDataFinal


# In[59]:


df_DiscoveryData['# of Formulas']= df_DiscoveryData['# of Formulas'].replace(np.nan,0)
df_DiscoveryData['# of Formulas with Errors']= df_DiscoveryData['# of Formulas with Errors'].replace(np.nan,0)
df_DiscoveryData['# of Warnings']= df_DiscoveryData['# of Warnings'].replace(np.nan,0)
df_DiscoveryData['# of Array Formulas']= df_DiscoveryData['# of Array Formulas'].replace(np.nan,0)
df_DiscoveryData['# of Formula formatted as Text']= df_DiscoveryData['# of Formula formatted as Text'].replace(np.nan,0)
df_DiscoveryData['# of Formulas with Constants']= df_DiscoveryData['# of Formulas with Constants'].replace(np.nan,0)
df_DiscoveryData['# of Formulas with Blank Cells']= df_DiscoveryData['# of Formulas with Blank Cells'].replace(np.nan,0)
df_DiscoveryData['# of Formulas with Text Cells']= df_DiscoveryData['# of Formulas with Text Cells'].replace(np.nan,0)

df_DiscoveryData['# of Sheets']= df_DiscoveryData['# of Sheets'].replace(np.nan,0)
df_DiscoveryData['# of Hidden Sheets']= df_DiscoveryData['# of Hidden Sheets'].replace(np.nan,0)
df_DiscoveryData['# of Very Hidden Sheets']= df_DiscoveryData['# of Very Hidden Sheets'].replace(np.nan,0)
df_DiscoveryData['# of Hidden Rows']= df_DiscoveryData['# of Hidden Rows'].replace(np.nan,0)
df_DiscoveryData['# of Hidden Columns']= df_DiscoveryData['# of Hidden Columns'].replace(np.nan,0)
df_DiscoveryData['# of Named Items']= df_DiscoveryData['# of Named Items'].replace(np.nan,0)
df_DiscoveryData['# of Validated Cells']= df_DiscoveryData['# of Validated Cells'].replace(np.nan,0)
df_DiscoveryData['# of Macros']= df_DiscoveryData['# of Macros'].replace(np.nan,0)
df_DiscoveryData['# of Queries']= df_DiscoveryData['# of Queries'].replace(np.nan,0)
df_DiscoveryData['# of VBA Queries']= df_DiscoveryData['# of VBA Queries'].replace(np.nan,0)
df_DiscoveryData['# of Invisible Cells']= df_DiscoveryData['# of Invisible Cells'].replace(np.nan,0)
df_DiscoveryData['# of Protected Worksheets']= df_DiscoveryData['# of Protected Worksheets'].replace(np.nan,0)
df_DiscoveryData['# of Charts']= df_DiscoveryData['# of Charts'].replace(np.nan,0)
df_DiscoveryData['# of Formulas with Hidden Cell']= df_DiscoveryData['# of Formulas with Hidden Cell'].replace(np.nan,0)
df_DiscoveryData['# of Internal links']= df_DiscoveryData['# of Internal links'].replace(np.nan,0)
df_DiscoveryData['# of External links']= df_DiscoveryData['# of External links'].replace(np.nan,0)
df_DiscoveryData['# of Broken Link Excel Files']= df_DiscoveryData['# of Broken Link Excel Files'].replace(np.nan,0)


# In[60]:


df_DiscoveryData


# In[61]:


# All Discovery data not assoicated with Invenotry (one master files if in copy group)
# This is your testing data.

# X1 = test_df[X_features]
# Y1 = test_df.Cr_Yes

# This data should be passed for random forest to get final output
# Need to know how to get output of this

## Pass X1, Y1 to radm_clf

# Now you can pass your test dataframe (X_test) to the model

#predictions = radm_clf.predict(X1)


#df_DiscoveryData = X


predictions = radm_clf.predict(df_DiscoveryData)


# In[62]:


predictions

PredDF = pd.DataFrame(predictions)
PredDF


# In[63]:



df_DiscoveryDataFinal['RowNumber'] = df_DiscoveryDataFinal.reset_index().index + 1
PredDF['RowNumber'] = PredDF.reset_index().index + 1

test_X1=pd.merge(df_DiscoveryDataFinal,PredDF,on='RowNumber')

#merged_df = pd.merge(df1, df2, left_index=True, right_index=True)


# In[64]:



test_X1


# In[65]:


test_X1.to_csv('Data\\File_Scan_Details_3.csv', index=False)


# In[299]:


#import shutil
#import os
#shutil.move('output_file.csv', os.path.join('Data', 'output_file.csv'))


# In[113]:


## Drawing the confusion matrix for KNN model
#draw_cm( test_y, predictions )

