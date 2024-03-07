from flask import Flask

DATABASE = "books_schema_black"
app = Flask(__name__)
app.secret_key = "shhhhhh"
