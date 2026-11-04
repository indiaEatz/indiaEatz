import React from "react";
// import Cards from "../components/pages/cards";
import "./menu.css";
import Cards from "../cards";

function Menu() {
  return (
    <div className="menu-page">

      <section className="menu-banner">
        <h1>Our Delicious Menu</h1>
        <p>Explore the Authentic Flavours of India</p>
      </section>

      <Cards />

    </div>
  );
}

export default Menu;