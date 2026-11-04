// import React from "react";
// import "./navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img
//           src="/images/logo.png"
//           alt="IndiaEatZ Logo"
//           className="logo-image"
//         />
//       </div>
//       <div className="navbar-links">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#menu">Menu</a>
//         <a href="#contact">Contact</a>
//       </div>
//       <div className="navbar-actions">
//         <input type="text" placeholder=" Search delicious food..." className="search-bar" />

//         <button className="cart-btn">🛒</button>
//         <button className="login-btn">Login</button>
//         <button className="register-btn">Register</button>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {

const navigate = useNavigate();

return ( <nav className="navbar">


  {/* Logo */}
  <div className="navbar-logo">
    <img
      src="/images/logo.png"
      alt="IndiaEatZ Logo"
      className="logo-image"
    />
  </div>

  {/* Navigation Links */}
  <div className="navbar-links">

    <Link to="/">Home</Link>

    <Link to="/about">About</Link>

    <Link to="/menu">Menu</Link>

    <Link to="/contact">Contact</Link>

  </div>

  {/* Navbar Actions */}
  <div className="navbar-actions">

    <input
      type="text"
      placeholder="Search delicious food..."
      className="search-bar"
    />

    <button
      className="cart-btn"
      onClick={() => navigate("/cart")}
    >
      🛒
    </button>

    <button
      className="login-btn"
      onClick={() => navigate("/login")}
    >
      Login
    </button>

    <button
      className="register-btn"
      onClick={() => navigate("/register")}
    >
      Register
    </button>

  </div>

</nav>


);
}

export default Navbar;

