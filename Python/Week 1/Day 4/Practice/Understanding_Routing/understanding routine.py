from flask import Flask,render_template

app=Flask(__name__)



@app.route('/')
def show():
    return 'Hello World'
@app.route('/dojo')
def show_dojo():
    return "<h1>Dojo</h1>"
@app.route('/say/<name>')
def show_Hi_flask(name):
    return f"<h1>Hi {name}</h1>"

@app.route('/repeat/<int:nmbr>/<name>')
def repeat_name(nmbr,name):
    return f"{name}<br>"*nmbr


if __name__=='__main__':
    app.run(debug=True,port=1339)