// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import Main from "./components/main";

// function App() {
//   return <Main />;
// }

// export default App;
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/navbar";
// import Home from "./components/pages/home";
// import About from "./components/pages/about";
// import Menu from "./components/pages/menu";
// import Contact from "./components/pages/contact";
// import Login from "./components/pages/login";
// import Register from "./components/pages/register";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./components/pages/about";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./components/pages/home";
// import About from "./components/pages/about.jsx";
import Menu from "./components/pages/menu";
// import Contact from "./components/pages/contact.jsx";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import { About } from "./components/pages/about.jsx";
import { Contact } from "./components/pages/contact.jsx";

console.log("ABOUT:", About);
console.log("ABOUT TYPE:", typeof About);
console.log("ABOUT KEYS:", Object.keys(About));
console.log("ABOUT DEFAULT:", About.default);

console.log("CONTACT:", Contact);
console.log("CONTACT TYPE:", typeof Contact);
console.log("CONTACT KEYS:", Object.keys(Contact));
console.log("CONTACT DEFAULT:", Contact.default);

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;