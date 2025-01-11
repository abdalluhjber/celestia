import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css";
const SignIn = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="body-sign-in">
     
        <fieldset className="register-an-account">
          <legend className="registration-type">Sign in</legend>
      
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
<br/>
            <br />
            <button type="submit" className="account-ok">Sign in</button>

            <br />
            <br />
            <div onClick={() => setCurrentPage('signup')} className="switch-registrtion">
              Don't have an account? 
            </div>
         
        </fieldset>
      
      {error && <p className="error-message">{error}</p>}

      
      <div className="home-logo">
        <a href="home.html">
         {/*<img src={logo} alt="Home Logo" className="home-logo img" />*/}
        </a>
      </div>
    </div>
  );
};
export default SignIn;