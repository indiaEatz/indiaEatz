
import React, { useState } from "react";
import "./cards.css";

const cardData = [
  {
    id: 1,
    title: "Delicious Cake",
    description: "Freshly baked cake with delicious toppings.",
    image: "/images/card1.png",
  },
  {
    id: 2,
    title: "Crispy Delights",
    description: "Enjoy crunchy snacks bursting with authentic Indian flavors.",
    image: "/images/card2.png",
  },
  {
    id: 3,
    title: "Veg Specials",
    description: "Fresh and flavorful vegetarian dishes made with love.",
    image: "/images/card3.png",
  },
  {
    id: 4,
    title: "Aromatic Biryani",
    description:
      "Aromatic biryani made with rich spices and irresistible flavors.",
    image: "/images/card4.png",
  },
];

function Cards() {
  const [cart, setCart] = useState([]);

  // Add food item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.title} added to cart!`);
  };

  return (
    <section className="cards-section">
      <h2 className="cards-heading">Our Special Menu</h2>

      <p className="cards-subtitle">
        Discover something delicious for every craving.
      </p>

      {/* Cart Counter */}
      {/* <div className="cart-counter"> */}
        {/* 🛒 Cart: {cart.length} items */}
      {/* </div> */}

      {/* Food Cards */}
      <div className="cards-container">
        {cardData.map((card) => (
          <div className="food-card" key={card.id}>
            {/* Food Image */}
            <div className="card-image-container">
              <img
                src={card.image}
                alt={card.title}
                className="card-image"
              />

              {/* Heart Add to Cart Button */}
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(card)}
                title="Add to Cart"
                aria-label={`Add ${card.title} to cart`}
              >
                ♡
              </button>
            </div>

            {/* Card Content */}
            <div className="card-content">
              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <button
                className="card-button"
                onClick={() => alert(`You selected ${card.title}`)}
              >
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;

