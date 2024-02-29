from flask import Flask , render_template 
import math
app = Flask ( __name__ )

@app.route("/")
def king ():
    return render_template ("index.html")

@app.route("/<int:x>/<int:y>")
def queen (x,y):
    x=math.floor(x/2)
    y=math.floor(y/2)
    return render_template ("index1.html",x=x,y=y)
@app.route("/<int:x>/<int:y>/<color1>/<color2>")
def bishop (x,y,color1,color2):
    x=math.floor(x/2)
    y=math.floor(y/2)
    return render_template ("index2.html",x=x,y=y,color1=color1,color2=color2)





if __name__ == '__main__' :
    app.run(debug=True)



