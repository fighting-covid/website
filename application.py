from flask import Flask, render_template, request
from dash import Dash, callback_context, no_update
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd
import sqlite3
import yagmail

server = Flask(__name__)

app1 = Dash(
    __name__,
    server=server,
    routes_pathname_prefix='/dash1/'
)

# app2 = Dash(
#     __name__,
#     server=server,
#     routes_pathname_prefix='/dash2/'
# )
#
# app3 = Dash(
#     __name__,
#     server=server,
#     routes_pathname_prefix='/dash3/'
# )

conn = sqlite3.connect("hospital_data.db")
df = pd.read_sql_query("SELECT * FROM data", conn)

x1_list = ["masks", "ventilators", "faceshields", "gowns"]
y1_list = [df[key].sum() for key in x1_list]
app1.layout = html.Div(
    [
        dcc.Graph(
            id='graph',
            figure={
                'data': [
                    {'x': x1_list,
                     'y': y1_list, 'type': 'bar', 'name': 'Supplies'},
                ],
                'layout': {
                    'title': 'Supplies Requested by Hospitals'
                }
            }
        ),
    ]
)

@server.route("/")
def root():
    return render_template("index.html")


@server.route("/requestppe")
def requestppe():
    return render_template("requestppe.html")
    
@server.route("/about")
def about():
    return render_template("about.html")
    
    
@server.route("/contact", methods=['GET', 'POST'])
def contact():
    if request.method=='POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        
        email_message = "Name: "+name+"\n";
        email_message += "Email: "+email+"\n";
        email_message += "Message: "+message+"\n";
        
        yag = yagmail.SMTP('projectycro@gmail.com', oauth2_file='oauth2_creds.json')
        yag.send('projectycro@gmail.com', "Contact Form: "+name, email_message)
        return render_template("contact_results.html")
        
    else:
         return render_template("contact.html")


@server.route("/donate")
def donate():
    return render_template("donate.html")


if __name__ == '__main__':
    server.run(debug=True)
