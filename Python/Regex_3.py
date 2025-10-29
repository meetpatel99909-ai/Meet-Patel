import sqlite3
import pandas as pd

# Function to create a sample SQLite database and a table for testing
def create_sample_db():
    # Connect to SQLite database (or create it if it doesn't exist)
    conn = sqlite3.connect('test_database.db')
    cursor = conn.cursor()
    
    # Create a sample table 'customer_data'
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS customer_data (
        CustomerID INTEGER PRIMARY KEY,
        Basel TEXT,
        CreditCardNumber TEXT,
        Name TEXT,
        Email TEXT
    )
    ''')

    # Insert sample data into the table
    cursor.executemany('''
    INSERT INTO customer_data (Basel, CreditCardNumber, Name, Email) VALUES (?, ?, ?, ?)
    ''', [
        ('Basel III', '4111 1111 1111 1111', 'Alice', 'alice@example.com'),
        ('Basel II', '5500 0000 0000 0004', 'Bob', 'bob@example.com'),
        ('Basel IV', '3782 8224 6310 005', 'Charlie', 'charlie@example.com'),
        ('Basel I', '6011 0000 0000 0004', 'David', 'david@example.com')
    ])
    # select * from PARAMETER_TABLE where PARAMNAME like '%basel%'
    # Select Username from UserMaster

    # Commit the transaction and close the connection
    conn.commit()
    conn.close()

# Function to fetch data from the database and save it to an Excel file
def fetch_and_save_to_excel():
    # Connect to the SQLite database
    conn = sqlite3.connect('test_database.db')

    # Define the SQL SELECT query
    query = '''
    SELECT Basel, CreditCardNumber, Name, Email
    FROM customer_data
    WHERE CreditCardNumber IS NOT NULL
    '''

    # Execute the SQL query and fetch the data into a Pandas DataFrame
    df = pd.read_sql(query, conn)

    # Define the dummy Excel file path
    excel_file_path = 'C:/dummy/path/to/output_customer_data.xlsx'
    
    # Save the DataFrame to an Excel file
    df.to_excel(excel_file_path, index=False)

    # Print confirmation message
    print(f"Data has been successfully saved to {excel_file_path}")

    # Close the connection
    conn.close()

# Main function to demonstrate the entire process
def main():
    # Step 1: Create a sample database and table with data
    create_sample_db()
    
    # Step 2: Fetch data from the database and save it to an Excel file
    fetch_and_save_to_excel()

# Run the main function
if __name__ == '__main__':
    main()
