from flask import Flask, render_template, request
from dash import Dash, callback_context, no_update
import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px
import plotly.graph_objects as go
import pandas as pd
import sqlite3
import yagmail

EMAIL_SEND = "fighting.coronav@gmail.com"

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

x1_list = ["Sewn Face Masks" if i % 2 == 0 else "3D Printed Face Shields" for i in range(2 * len(df))]
y1_list = [df.at[index // 2, key] for index, key in enumerate(x1_list)]
org_list = [df.at[index // 2, "Organization"] for index in range(len(x1_list))]

fig=go.Figure([go.Bar(x=x1_list, y=y1_list, text=org_list)])
fig.update_layout(
    title="PPE Requested by Hospitals",
	title_x=0.5,
    xaxis_title="Type of PPE",
    yaxis_title="Quantity",
)

app1.layout = html.Div(
	[
		dcc.Graph(
			figure=fig
		),
	]
)


@server.route("/")
def root():
	return render_template("index.html")


@server.route("/requestppe")
def requestppe():
	return render_template("requestppe.html")


@server.route("/donateppe")
def donateppe():
	return render_template("donateppe.html")


@server.route("/about")
def about():
	return render_template("about.html")


@server.route("/contact", methods=['GET', 'POST'])
def contact():
	if request.method == 'POST':
		name = request.form['name']
		email = request.form['email']
		message = request.form['message']

		email_message = "Name: " + name + "\n";
		email_message += "Email: " + email + "\n";
		email_message += "Message: " + message + "\n";

		yag = yagmail.SMTP(EMAIL_SEND, oauth2_file='oauth2_creds.json')
		yag.send(EMAIL_SEND, "Contact Form: " + name, email_message)
		return render_template("contact_results.html")

	else:
		return render_template("contact.html")


if __name__ == '__main__':
	server.run(debug=True)
