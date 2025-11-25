import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

export default function Authform() {

    const [login, setLogin] = useState(true);
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Password mismatch
        if (pass !== confirmPass) {
            setError("Incorrect Password !");
            return;
        }

        // All fields filled
        if (email !== "" && pass !== "" && confirmPass !== "") {
            setError("");
            navigate("/nextpage");  //  Redirect to next page
        } else {
            setError("Please fill all fields");
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={login ? 'active' : ""} onClick={() => { setLogin(true); setError("") }}>Login</button>
                    <button className={!login ? 'active' : ""} onClick={() => { setLogin(false); setError("") }}>SignUp</button>
                </div>

                {login ? (
                    <div className='form'>
                        <h2>Login Form</h2>

                        <input type="email" placeholder="Email"
                               onChange={(e) => setEmail(e.target.value)} />

                        <input type="password" placeholder="Password"
                               onChange={(e) => setPass(e.target.value)} />

                        <input type="password" placeholder="Confirm Password"
                               onChange={(e) => setConfirmPass(e.target.value)} />

                        <p style={{ color: "red" }}>{error}</p>

                        <button onClick={handleSubmit}>Login</button>
                    </div>
                ) : (
                    <form>
                        <div className="form">
                            <h2>Signup Form</h2>

                            <input type="email" placeholder="Email"
                                   onChange={(e) => setEmail(e.target.value)} />

                            <input type="password" placeholder="Password"
                                   onChange={(e) => setPass(e.target.value)} />

                            <input type="password" placeholder="Confirm Password"
                                   onChange={(e) => setConfirmPass(e.target.value)} />

                            <p style={{ color: "red" }}>{error}</p>

                            <button onClick={handleSubmit}>Signup</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
