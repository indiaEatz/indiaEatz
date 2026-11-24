
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart-context";
import "./checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { cart, cartCount, cartTotal, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      navigate("/menu");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const customer = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      city: formData.get("city"),
      pincode: formData.get("pincode"),
    };

    const newOrder = {
      id: `IE${Date.now()}`,
      date: new Date().toLocaleString("en-IN"),
      customer,
      items: [...cart],
      total: cartTotal,
      paymentMethod,
      status: "Order Placed",
    };

    const previousOrders = JSON.parse(
      localStorage.getItem("indiaEatzOrders") || "[]"
    );

    localStorage.setItem(
      "indiaEatzOrders",
      JSON.stringify([newOrder, ...previousOrders])
    );

    setPlacedOrder(newOrder);
    clearCart();
    setOrderPlaced(true);

    // Save a snapshot before clearing the cart
    setPlacedOrder({
      customer,
      items: [...cart],
      total: cartTotal,
      paymentMethod,
    });

    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced && placedOrder) {
    return (
      <div className="checkout-page">
        <div className="order-success">
          <div className="success-icon">✓</div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you, {placedOrder.customer.name}!</p>
          <p>Your IndiaEatz order has been confirmed.</p>

          <div className="success-details">
            <p>
              <strong>Delivery Address:</strong>{" "}
              {placedOrder.customer.address}, {placedOrder.customer.city},{" "}
              {placedOrder.customer.pincode}
            </p>

            <p>
              <strong>Mobile:</strong> {placedOrder.customer.phone}
            </p>

            <p>
              <strong>Payment:</strong>{" "}
              {placedOrder.paymentMethod === "cod"
                ? "Cash on Delivery"
                : "UPI (demo only)"}
            </p>

            <p>
              <strong>Total Paid / Due:</strong> ₹
              {placedOrder.total.toLocaleString("en-IN")}
            </p>
          </div>

          <button
            className="place-order-btn"
            onClick={() => navigate("/menu")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="empty-checkout">
          <h2>Your Cart is Empty!</h2>
          <p>Add some delicious food before checkout.</p>
          <button
            className="place-order-btn"
            onClick={() => navigate("/menu")}
          >
            Explore Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="checkout-heading">Checkout</h1>
      <p className="checkout-subtitle">
        Complete your details to place your order.
      </p>

      <div className="checkout-container">

        {/* Customer Details */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Information</h2>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter 10-digit mobile number"
            pattern="[6-9][0-9]{9}"
            maxLength="10"
            required
          />

          <label>Delivery Address</label>
          <textarea
            name="address"
            placeholder="House number, street, area"
            rows="3"
            required
          />

          <div className="checkout-fields">
            <div>
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                required
              />
            </div>

            <div>
              <label>PIN Code</label>
              <input
                type="text"
                name="pincode"
                placeholder="6-digit PIN"
                pattern="[0-9]{6}"
                maxLength="6"
                required
              />
            </div>
          </div>

          <h2 className="payment-heading">Payment Method</h2>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            Cash on Delivery
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
            />
            UPI (Demo only – payment not processed)
          </label>

          <button type="submit" className="place-order-btn">
            PLACE ORDER
          </button>

          <button
            type="button"
            className="back-to-cart-btn"
            onClick={() => navigate("/cart")}
          >
            Back to Cart
          </button>
        </form>

        {/* Order Summary */}
        <div className="checkout-summary">
          <h2>Your Order</h2>

          {cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="checkout-item-info">
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <strong>
                  ₹
                  {(
                    Number(item.price) * item.quantity
                  ).toLocaleString("en-IN")}
                </strong>
              </div>
            </div>
          ))}

          <hr />

          <div className="checkout-summary-row">
            <span>Total Items</span>
            <span>{cartCount}</span>
          </div>

          <div className="checkout-summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal.toLocaleString("en-IN")}</span>
          </div>

          <div className="checkout-summary-row">
            <span>Delivery</span>
            <span>FREE</span>
          </div>

          <hr />

          <div className="checkout-total">
            <strong>Total Amount</strong>
            <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
