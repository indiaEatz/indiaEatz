
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./cart-context";
import "./cards.css";

const cardData = [
  {
    id: 1,
    title: "Delicious Cake",
    description: "Freshly baked cake with delicious toppings.",
    image: "/images/card1.png",
    price: 450,
    originalPrice: 550,
    brand: "IndiaEatz Collection",
    rating: 4.3,
    reviews: 631,
  },
  {
    id: 2,
    title: "Crispy Delights",
    description: "Enjoy crunchy snacks bursting with authentic Indian flavors.",
    image: "/images/card2.png",
    price: 180,
    originalPrice: 220,
    brand: "IndiaEatz Collection",
    rating: 4.4,
    reviews: 420,
  },
  {
    id: 3,
    title: "Veg Specials",
    description: "Fresh and flavorful vegetarian dishes made with love.",
    image: "/images/card3.png",
    price: 250,
    originalPrice: 300,
    brand: "IndiaEatz Collection",
    rating: 4.5,
    reviews: 520,
  },
  {
    id: 4,
    title: "Aromatic Biryani",
    description: "Aromatic biryani made with rich spices and irresistible flavors.",
    image: "/images/card4.png",
    price: 350,
    originalPrice: 420,
    brand: "IndiaEatz Collection",
    rating: 4.6,
    reviews: 710,
  },
];

function Cards() {
  const navigate = useNavigate();

  const {
    toggleWishlist,
    isWishlisted,
  } = useCart();

  const viewDetails = (product) => {
    navigate("/card-detail", {
      state: { product },
    });
  };

  return (
    <section className="cards-section">
      <h2 className="cards-heading">Our Special Menu</h2>

      <p className="cards-subtitle">
        Discover something delicious for every craving.
      </p>

      <div className="cards-container">
        {cardData.map((card) => (
          <div className="food-card" key={card.id}>

            <div className="card-image-container">
              <img
                src={card.image}
                alt={card.title}
                className="card-image"
              />

              <button
                type="button"
                className={`wishlist-btn ${
                  isWishlisted(card.id) ? "active" : ""
                }`}
                onClick={() => toggleWishlist(card)}
                aria-label={
                  isWishlisted(card.id)
                    ? "Remove from wishlist"
                    : "Add to wishlist"
                }
              >
                ♥
              </button>
            </div>

            <div className="card-content">
              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <button
                className="card-button"
                onClick={() => viewDetails(card)}
              >
                View Details
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
