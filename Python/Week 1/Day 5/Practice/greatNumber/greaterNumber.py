from flask import Flask,render_template,redirect,session,request
import random


app=Flask(__name__)

app.secret_key="this the secret key"

ran=random.randint(1,100)

@app.route('/')
def show():
    return render_template('greatNumber.html')

@app.route('/greet',methods=['POST'])
def greet():
    global ran
    print(ran)
    session['guess']=request.form['guess']
    if int(session['guess'])>ran:
        return render_template('true.html')
    elif int(session['guess'])<ran:
        return render_template('less.html')
    else:
        return render_template('thatit.html',ran=ran)




if __name__=='__main__':
    app.run(debug=True)