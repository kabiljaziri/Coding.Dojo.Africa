import React,{useState} from "react";

const User= (props)=>{
    const [count, setCount] = useState(props.user)
    const increase =(index)=>{
        console.log(index)
        console.log(props.user[index].age)
        setCount(props.user[index].age +=1);
    }
    return(
        <>
                {props.user.map((element,idx) =>{return (
                    <div  key={idx}>
                        <p>first Name: {element.first_Name}</p>
                        <p>last Name: {element.Last_Name}</p>
                        <p>age: {element.age}</p>
                        <p>Hair Color: {element.hair_color}</p>
                        <button onClick={()=>increase(idx)}>Happy Birthday</button>
                    </div>
                )})}
        </>
    )
}


export default User