import dash
import dash_core_components as dcc
import dash_html_components as html
from flask import Flask, render_template, request

server = Flask(__name__)

app = dash.Dash(
    __name__,
    server=server,
    routes_pathname_prefix='/dash/'
)

app.layout = html.Div("Graphs for hospital data")


@server.route("/")
def root():
    return render_template("index.html")


@server.route("/about")
def about():
    return render_template("about.html")
    
    
@server.route("/contact")
def contact():
    return render_template("contact.html")


@server.route("/donate")
def donate():
    return render_template("donate.html")