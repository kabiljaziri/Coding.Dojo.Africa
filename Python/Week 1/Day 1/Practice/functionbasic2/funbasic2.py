#1
def Countdown(element):
    result=[]
    for i in range(element,0,-1):
        result.append(i)
    return result
print(Countdown(int(input("Type Your Number For Countdown :"))))

#2
def Print_and_Return(liste):
    print(liste[0])
    return liste[1]
#3
def First_Plus_Length(list):
    first_value=list[0]+len(list)
    return first_value
#4
def Values_Greater_Than_Second(list):
    second=list[1]
    newarray=[]
    if len(list)==1 or len(list)==0:
        return False
    else:
        for i in range(0,len(list)):
            if second<list[i]:
                newarray.append(list[i])
    return newarray

#5 
def This_Length_That_Value(start,value):
    newarray=[]
    for i in range(0,start):
            newarray.append(int(value))
    return newarray