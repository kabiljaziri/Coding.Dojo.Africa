import React from "react";

const Details = (props) => {
    return (
        <>
            {props.person.map((element,idx) =>{return (
                <>
                <div key={idx}>
                    <h1 >First Name: {element.first_name}</h1>
                    <h1>Last Name: {element.last_name}</h1>
                    <p>Age: {element.age}</p>
                    <p>Hair Color: {element.hair} </p>
                </div>
                </>
            )})}
            
        </>
        
    );
};

export default Details;