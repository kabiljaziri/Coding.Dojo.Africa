from flask_app import app
from flask import render_template, redirect, request, session,flash
from flask_app.models.user import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/recipies')
def dashboard():
    return render_template("recipies.html")

@app.route('/register', methods=['POST'])
def register():
    # if User.validate()
    data = {**request.form}
    # data={
    #     'first_name':request.form['first_name']
    # }
    if User.validate(data):
        # user data is valid 
        # hash password
        pw_hash = bcrypt.generate_password_hash(data['password'])
        data["password"] = pw_hash
        User.create(data)
    return redirect('/')


@app.route('/login', methods = ['POST'])
def login():
    user_from_db = User.get_by_email({'email':request.form['email']})
    if not user_from_db:
        flash("Email does not exist")
        return redirect('/')
    if not bcrypt.check_password_hash(user_from_db.password, request.form['password']):
        # if we get False after checking the password
        flash("Invalid Password")
        return redirect('/')
    return redirect('/recipies')