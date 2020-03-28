import sqlite3
# TODO: Figure out how to get pandas working on director without a functional pip
import pandas as pd

conn = sqlite3.connect('hospital_data.db')
c = conn.cursor()

# TODO: Figure out the best way to store multiple needed_equipment for a single hospital:
# Either have multiple columns, or store as a list of strings / one long string / JSON object somehow
# Whichever makes querying and sorting data easiest

def create_table():
    c.execute("CREATE TABLE data(hospital TEXT, address TEXT, contact TEXT, masks INTEGER, ventilators INTEGER, faceshields INTEGER, gowns INTEGER)")


def update_from_csv():
    dataframe = pd.read_csv('test.csv')
    dataframe.columns = dataframe.columns.str.strip()
    dataframe.to_sql("data", conn, if_exists='replace')
    conn.commit()
    
    
# TODO: Add methods that filter / sort the data based on parameters we pass:
# For example, sort by most commonly needed equipment or which hospitals need the most equipment,
# filter by retaining only hospitals in high-risk areas such as New York, etc.

def filter_data(key, operation, value):
    c.execute('SELECT * FROM data WHERE {key} {operation} {value}')
    data = c.fetchall()


def main():
    create_table()
    update_from_csv()
    c.close
    conn.close()
    

if __name__ == '__main__':
    main()