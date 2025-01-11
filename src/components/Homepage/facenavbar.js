import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShowAboutModal, setShowContactModal }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="Celestia Logo" />
      </div>
      <div className="threenav">
        <a className="navhome">Home</a>
        <button 
          className="btn transparent-btn" 
          onClick={() => setShowAboutModal(true)}
        >
          About Us
        </button>
        <button 
          className="btn transparent-btn" 
          onClick={() => setShowContactModal(true)}
        >
          Contact
        </button>
      </div>
      <div className="login-container">
        <button type="button" className="login" onClick={() => navigate('/SignIn')}>
          login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
