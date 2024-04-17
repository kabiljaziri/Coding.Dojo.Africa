from flask_app import app
import random
from flask import Flask,render_template,request,session,redirect
from datetime import datetime

@app.route('/')
def home():
    if "score" not in session:
        session["score"]=0
    if "activities" not in session:
        session["activities"]=[]
    return render_template("index.html")


@app.route ('/process_money',methods=['POST'])
def process ():
    buillding= request.form["building"]
    if buillding == "farm":
        gold = random.randint(1,2)*10
        session ["score"]+=gold
        session["activities"].append (f"Earned {gold} golds from the farm {datetime.now()}")

    
    if buillding == "cave":
        gold = random.randint(1,2)*5
        session ["score"]+=gold
        session["activities"].append (f"Earned {gold} golds from the cave {datetime.now()}")

    if buillding == "house":
        gold = random.choice([2,5])
        session ["score"]+=gold
        session["activities"].append (f"Earned {gold} golds from the house {datetime.now()}")

    if buillding == "casino":
        gold = random.randint(-50,-50)
        session ["score"]+=gold
        if gold <0:
            session["activities"].append (f"Entred a casino and lost {gold}  golds .. ouch {datetime.now()}")
        elif gold >0:
            session["activities"].append (f"Entred a casino and win {gold}  golds .. wiiiii {datetime.now()}")
        else:
            session["activities"].append (f"Entred a casino and didn't play  {datetime.now()}")



    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)