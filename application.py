from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def root():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")
    
    
@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/donate")
def donate():
    return render_template("donate.html")