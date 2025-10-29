library(tidyverse)

fifa19_data <- read_csv("C:/Users/rahul/Desktop/data.csv")

fifa19_data_dot_csv <- read.csv("C:/Users/rahul/Desktop/data.csv")


print("New File with ggplot")

ggplot(data = fifa19_data, mapping = aes(x = Overall, y = Age)) +  geom_line()
#€

euro45 <- "€"

euro45

fifa19_data_dot_csv$Wage = as.numeric(gsub("€", "", fifa19_data_dot_csv$Wage))
fifa19_data$Value = as.numeric(gsub(euro, "<U+0080>", fifa19_data$Value))

str(fifa19_data)
as.numeric(gsub("\\D", "", fifa19_data['Wage']))

fifa19_data['Wage']




