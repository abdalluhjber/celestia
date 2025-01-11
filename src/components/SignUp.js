import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./SignUp.css";


const SignUp = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert(`Account created successfully! Welcome, ${username}!`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
   
    <div className="body-sign-up">
      <form className="form-cont" onSubmit={handleSignUp}>
        <fieldset className="register-an-account">
          <legend className="registration-type">Sign Up</legend>
          <div className="inoutorder">
            <label htmlFor="name" className="taginput">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-account"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />

            <label htmlFor="email" className="taginput">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-account"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />

            <label htmlFor="password" className="taginput">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-account"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
<br/>
            <button type="submit" className="account-ok">Create an Account</button>
           

            <div className="switch-registrtion2" onClick={() => setCurrentPage('signin')}>
              Already have an account? 
            </div>
          </div>
        </fieldset>
      </form>

      {error && <p className="error">{error}</p>}


      <div className="home-logo">
        <a href="home.html">
        {/*  <img src={logo} alt="Home Logo" className="home-logo img" />*/}
        </a>
      </div>

    </div>
  
  );
};

export default SignUp;