import React, { useState } from 'react';

const MoreForms = (props) => {
    // State
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpass, setConfpass] = useState("");

    // Validation State
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confpassError, setConfpassError] = useState("");

    // Validation Functions
    const validateFname = () => {
        if (fname.length <2) {
            setFnameError("First Name must be at least 2 characters");
        } else {
            setFnameError("");
        }
    };

    const validateLname = () => {
        if (lname.length < 2) {
            setLnameError("Last Name must be at least 2 characters");
        } else {
            setLnameError("");
        }
    };

    const validateEmail = () => {
        if (email.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    };

    const validateConfpass =  (input) => {
        console.log(password+"*********"+confpass);
            setConfpass(input)
            if (password !== input) {
                setConfpassError("Passwords do not match");
            } else {
                setConfpassError("");
            }
    };
    // .substring(0,password.length-1)
    return (
        <>
        <fieldset>
            <legend>Forms</legend>
            <div>
                <form>
                    <div>
                        <label>First Name: </label>
                        <input
                            value={fname}
                            onChange={(e) => {
                                setFname(e.target.value);
                                validateFname();
                            }}
                        />
                        <span className="error">{fnameError}</span>
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input
                            value={lname}
                            onChange={(e) => {
                                setLname(e.target.value);
                                validateLname();
                            }}
                        />
                        <span className="error">{lnameError}</span>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                validateEmail();
                            }}
                        />
                        <span className="error">{emailError}</span>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            onChange={async (e) => {
                                // Non-blocking single threaded prog language(sync)
                                await setPassword(e.target.value); //5s
                                validatePassword(); //2s
                            }}
                        />
                        <span className="error">{passwordError}</span>
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input
                            type="password"
                            value={confpass}
                            onChange={(e)=>validateConfpass(e.target.value)}
                        />
                        <span style={{color:"crimson", backgroundColor:"yellow"}}>{password!=confpass?"paswords must match":""}</span>
                        <span className="error">{confpassError}</span>
                    </div>

                    {/* <button onClick={submitHandler}>Submit</button> */}
                </form>
            </div>
        </fieldset>
        </>
    );
};

export default MoreForms;
