from flask_app import app
from flask import render_template,redirect,request, session
from flask_app.models.user import User

#* View Route
@app.route("/users")
def home():
    all_users = User.get_all()
    return render_template("users.html", all_users = all_users)

#* View Route
@app.route("/users/create")
def display_form():
    return render_template("newuser.html")

#! Action Route
@app.route("/users/new", methods=["POST"])
def create_user():
    User.save(request.form)
    print(request.form)
    #! NEVER EVER EVER render on a post request
    return redirect("/users")
