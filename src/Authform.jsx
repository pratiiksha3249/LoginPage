import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

export default function Authform() {
    const [login, setLogin] = useState(true);

    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");

    const [email,setEmail]=useState("");
    // const [next,setNext]=useState("");
    const navigate = useNavigate();

  const handleSubmit = (e) => {
          if (pass!==confirmPass) 
          setError("Incorrect Password !");
          // avoid refresh (dont reload the page)
          else{
                   valD();
          }
          e.preventDefault();   
         
    
  }

const valD = () => {
  console.log("I am inside valD");

  if (email.length > 0 && pass.length > 0 && confirmPass.length > 0) {
    navigate("/nextpage");
  }

};
   
  
return (
    
    <div className="container">
        <div className="form-container">
            <div className="form-toggle">

                <button className={login ? 'active' : ""} onClick={() => {setLogin(true);setError("")}}>Login</button>
                <button  type="submit" className={!login ? 'active' : ""} onClick={() => {setLogin(false);setError("")}}>SignUp</button>
            </div>
            {login ? <>
                <div className='form'>
                    <h2>Login Form</h2>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} ></input>
                    {/* <input type="password" placeholder="Password"></input> */}
                    
                    <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}></input>
                    <input type="password" placeholder=" Confirm Password" onChange={(e) => setConfirmPass(e.target.value)}></input>
                  
                    <p style={{ color: "red" }}>{error}</p>
                    <a >Forgot Password?</a>

                    <button onClick={handleSubmit} >Login</button>
                    <p>Not a Member  <a href="#" onClick={() => setLogin(false)}>Signup now</a></p>
                </div>
            </> : <>
            <form>
                <div className="form">
                    <h2>Signup Form</h2>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}></input>
                    <input type="password" placeholder=" Confirm Password" onChange={(e) => setConfirmPass(e.target.value)}></input>
                                       <p style={{ color: "red" }}>{error}</p>

                    <button onClick={handleSubmit}>Signup</button>
                </div>
           </form> </>}
        </div>
    </div>


)

}

  
