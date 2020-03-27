from flask import Flask, render_template, request
from dash import Dash, callback_context, no_update
from dash.dependencies import Input, Output
from dash_table import DataTable
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd
import os
import yagmail

server = Flask(__name__)

app = Dash(
    __name__,
    server=server,
    routes_pathname_prefix='/dash/'
)

global lastmt

path = "test.csv"
df = pd.read_csv(path)
lastmt = os.stat(path).st_mtime
print(lastmt)
app.layout = html.Div(
    [
        dcc.Graph(
            id='graph',
            figure={
                'data': [
                    {'x': ["masks", "gloves", "respirators", "hand sanitizer", "toilet paper"],
                     'y': [6000, 3000, 4500, 7300, 9999], 'type': 'bar', 'name': 'Supplies'},
                ],
                'layout': {
                    'title': 'Supplies Requested by Hospitals'
                }
            }
        ),
        # DataTable(
        #     id="table",
        #     columns=[{"name": i, "id": i} for i in df.columns],
        #     data=df.to_dict("records"),
        #     export_format="csv",
        # ),
        dcc.Interval(id='interval', interval=1000, n_intervals=0)
    ]
)

@app.callback(Output('graph', 'figure'), [Input('interval', 'n_intervals')])
def trigger_by_modify(n):
    global lastmt
    if os.stat(path).st_mtime > lastmt:
        print("modified")
        lastmt = os.stat(path).st_mtime
        return pd.read_csv(path).to_dict('records')
    return no_update


@server.route("/")
def root():
    return render_template("index.html")


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
        
        yag = yagmail.SMTP('fighting.coronav@gmail.com', oauth2_file='oauth2_creds.json')
        yag.send('fighting.coronav@gmail.com', "Contact Form: "+name, email_message)
        return render_template("contact_results.html")
        
    else:
         return render_template("contact.html")


@server.route("/donate")
def donate():
    return render_template("donate.html")


if __name__ == '__main__':
    server.run(debug=True)
