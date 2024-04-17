import React from 'react'
import { useState } from 'react';

const Forms = (props) => {
    //State
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpass, setConfpass] = useState("");

    //Logic
    // const submitHandler = (e) => {
    //     e.preventDefault();
        // onSubmit={submitHandler} hedhi tet7att fil form
    return (
        //Appearance
        <fieldset>
            <legend>Forms</legend>
            <div>
                <form >
                    <div>
                        <label>First Name: </label>
                        <input onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="password" onChange={(e) => setConfpass(e.target.value)} />
                    </div>
                    <p>First Name: {fname}</p>
                    <p>Last Name: {lname}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm password: {confpass}</p>

                    {/* <button>Submit</button> */}
                </form>
            </div>
        </fieldset>
    )
}


export default Forms