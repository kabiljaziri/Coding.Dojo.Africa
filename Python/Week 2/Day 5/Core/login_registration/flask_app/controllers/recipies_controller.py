from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.user import User
from flask_app.models.recipies_model import Recipies


@app.route("/recipies")
def display_quote_form():
    all_recipies = Recipies.get_all()
    return render_template("recipies.html", all_recepies=all_recipies)