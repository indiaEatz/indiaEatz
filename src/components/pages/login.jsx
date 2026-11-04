import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
const handleLogin = (e) => {
e.preventDefault();


// Backend login integration will be added here.
console.log("Login submitted");

};

return ( <div className="login-page">

```
  <div className="login-card">

    <div className="login-logo">
      <h1>India<span>Eatz</span></h1>
      <p>Welcome Back!</p>
    </div>

    <h2>Login to Your Account</h2>

    <p className="login-description">
      Enjoy delicious food with IndiaEatz.
      Suraj Pinnalwar
    </p>

    <form onSubmit={handleLogin}>

      <div className="login-input-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="login-input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="login-options">
        <label>
          <input type="checkbox" />
          Remember me
        </label>

        <a href="#forgot-password">
          Forgot Password?
        </a>
      </div>

      <button type="submit" className="login-btn">
        Login
      </button>

    </form>

    <div className="login-register-link">
      Don't have an account?
      <Link to="/register"> Register Now</Link>
    </div>

  </div>

</div>


);
}

export default Login;
