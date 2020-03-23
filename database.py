import sqlite3
# import pandas as pd

conn = sqlite3.connect('hospital_data.db')
c = conn.cursor()

# TODO: Figure out the best way to store multiple needed_equipment for a single hospital:
# Either have multiple columns, or store as a list of strings / one long string / JSON object somehow
# Whichever makes querying and sorting data easiest

def create_table():
    c.execute("CREATE TABLE IF NOT EXISTS data(datestamp TEXT, hospital TEXT, address TEXT, needed_equipment TEXT, quantity INTEGER)")


def update_from_csv():
    dataframe = pd.read_csv('responses.csv')
    dataframe.columns = dataframe.columns.str.strip()
    dataframe.to_sql("data", conn)
    conn.commit()


# def read_from_db():
#     c.execute('SELECT * FROM data')
#     data = c.fetchall()
#     print(data)
#     for row in data:
#         print(row)

#     c.execute('SELECT * FROM data WHERE value = 3')
#     data = c.fetchall()
#     print(data)
#     for row in data:
#         print(row)

#     c.execute('SELECT * FROM data WHERE unix > 1452554972')
#     data = c.fetchall()
#     print(data)
#     for row in data:
#         print(row)

#     c.execute('SELECT value, datestamp FROM data WHERE unix > 1452554972')
#     data = c.fetchall()
#     print(data)
#     for row in data:
#         print(row[0])
        
    
# 
create_table()
c.close
conn.close()