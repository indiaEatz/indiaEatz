
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart-context";
import "./cart.css";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    updateQuantity,
    removeFromCart,
    cartCount,
    cartTotal,
  } = useCart();

  return (
    <div className="shopping-cart-page">

      <h1>My Shopping Cart 🛒</h1>

      <p className="cart-subtitle">
        You have {cartCount} items in your cart.
      </p>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <h2>Your Cart is Empty!</h2>

          <p>Add some delicious food to get started.</p>

          <button onClick={() => navigate("/menu")}>
            Explore Menu
          </button>
        </div>

      ) : (

        <div className="cart-container">

          <div className="cart-products">

            {cart.map((item) => (

              <div className="cart-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="cart-item-details">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <h4>
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </h4>

                  <div className="cart-quantity">

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="remove-cart-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>

                <div className="cart-item-total">

                  ₹{(
                    Number(item.price) * item.quantity
                  ).toLocaleString("en-IN")}

                </div>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>Price Details</h2>

            <div className="summary-row">
              <span>Total Items</span>
              <span>{cartCount}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>FREE</span>
            </div>

            <hr />

            <div className="summary-total">
              <strong>Total Amount</strong>

              <strong>
                ₹{cartTotal.toLocaleString("en-IN")}
              </strong>
            </div>

            <button
              className="checkout-button"
              onClick={() => navigate("/checkout")}
            >
              PROCEED TO CHECKOUT
            </button>

            <button
              className="continue-shopping"
              onClick={() => navigate("/menu")}
            >
              Continue Shopping
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;
