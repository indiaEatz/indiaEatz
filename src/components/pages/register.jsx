import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {

const handleRegister = (e) => {
e.preventDefault();


// Backend registration integration will be added here.
console.log("Registration submitted");


};

return ( <div className="register-page">


  <div className="register-card">

    <div className="register-logo">
      <h1>India<span>Eatz</span></h1>
      <p>Join Our Food Community!</p>
    </div>

    <h2>Create Your Account</h2>

    <p className="register-description">
      Register now and explore delicious Indian food.
    </p>

    <form onSubmit={handleRegister}>

      <div className="register-input-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="register-input-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="register-input-group">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="register-input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Create a password"
          required
        />
      </div>

      <div className="register-input-group">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          required
        />
      </div>

      <button type="submit" className="register-btn">
        Create Account
      </button>

    </form>

    <div className="register-login-link">
      Already have an account?
      <Link to="/login"> Login Now</Link>
    </div>

  </div>

</div>


);
}

export default Register;
