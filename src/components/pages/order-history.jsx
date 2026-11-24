import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./order-history.css";

function OrderHistory() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("indiaEatzOrders") || "[]"
    );
    setOrders(savedOrders);
  }, []);

  const formatPrice = (price) =>
    `₹${Number(price || 0).toLocaleString("en-IN")}`;

  return (
    <div className="order-history-page">
      <div className="order-history-header">
        <h1>My Orders</h1>
        <p>View your previous IndiaEatz orders.</p>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders">
          <div className="no-orders-icon">🛍️</div>
          <h2>No Orders Yet</h2>
          <p>Your placed orders will appear here.</p>
          <button onClick={() => navigate("/menu")}>
            Explore Menu
          </button>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-card-header">
                <div>
                  <h3>Order #{order.id}</h3>
                  <p>{order.date}</p>
                </div>
                <span className="order-status">{order.status}</span>
              </div>

              <div className="order-items">
                {order.items.map((item, index) => (
                  <div
                    className="order-item"
                    key={`${order.id}-${item.id}-${index}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="order-item-details">
                      <h4>{item.title}</h4>
                      <p>Quantity: {item.quantity}</p>
                    </div>

                    <strong>
                      {formatPrice(
                        Number(item.price) * Number(item.quantity)
                      )}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="order-card-footer">
                <div>
                  <p>
                    Payment:{" "}
                    {order.paymentMethod === "cod"
                      ? "Cash on Delivery"
                      : "UPI (Demo)"}
                  </p>
                  <h3>Total: {formatPrice(order.total)}</h3>
                </div>

                <button onClick={() => navigate("/menu")}>
                  Order Again
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderHistory;