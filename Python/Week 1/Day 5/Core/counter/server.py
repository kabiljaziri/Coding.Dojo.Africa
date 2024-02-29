from flask import Flask , render_template , session , redirect

app = Flask (__name__)

app.secret_key = "ninja"

@app.route('/')
def visite():
    session ["visits"] = session.get("visits",0) + 1
    return render_template("index.html", count=session["visits"])



@app.route('/destroy_sessnio')
def clear ():
    session.clear()	
    return redirect('/')


@app.get('/plustwo')
def cleas ():
    session ["visits"] = session.get("visits",0) + 1
    return redirect('/')






if __name__ =='__main__':
    app.run(debug=True)