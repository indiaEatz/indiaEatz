
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart-context";
import "./wishlist.css";

function Wishlist() {
  const navigate = useNavigate();

  const {
    wishlist,
    removeFromWishlist,
    addToCart,
  } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.title} added to cart!`);
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h1>My Wishlist ❤️</h1>
        <p>Your favourite foods, all in one place.</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <div className="empty-wishlist-icon">♡</div>
          <h2>Your Wishlist is Empty!</h2>
          <p>Save your favourite dishes by clicking the heart button.</p>

          <button onClick={() => navigate("/menu")}>
            Explore Menu
          </button>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <div className="wishlist-image">
                <img src={item.image} alt={item.title} />

                <button
                  className="remove-wishlist-btn"
                  onClick={() => removeFromWishlist(item.id)}
                  title="Remove from wishlist"
                >
                  ♥
                </button>
              </div>

              <div className="wishlist-info">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <h4>₹{Number(item.price).toLocaleString("en-IN")}</h4>

                <button
                  className="wishlist-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
