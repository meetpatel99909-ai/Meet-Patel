# keywords in this file are "read_csv, read.csv, read.csv2, 
#                           read_excel, read.table, read_table,
#                           read_table2, read_xls, read_xlsx"

library(tidyverse)
library(readxl)
library(utils)

data_file_csv = "C:\\Users\\admin\\Desktop\\data.csv"
data_file_xl = "C:\\Users\\admin\\Desktop\\univ_data.xlsx"

 
# here all these work perfectly for .xls or .xlsx filesfiles
# however for .csv files it is advisable to use the commands specified for csv files

my_data <- read_csv(data_file_csv)

my_data2 <- read.csv(data_file_csv)

my_data3 <- read.csv2(data_file_csv)

my_data4 <- read_excel(data_file_xl)

my_data5 <- read.table(file = data_file_csv)

my_data5 <- read_table(file = data_file_csv)

my_data7 <- read_table2(data_file_xl)

my_data8 <- read_xls(data_file_xl) # Use this for files with .xls extension

my_data8 <- read_xlsx(data_file_xl) #Use this for files with .xlsx extension

