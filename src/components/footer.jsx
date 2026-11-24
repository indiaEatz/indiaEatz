
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-column brand">
          <h2>IndiaEatZ<span></span></h2>
          <p>
            Your one-stop destination for online shopping.
            Discover quality products at the best prices.
          </p>

          <div className="social-links">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>
        </div>

        {/* Shopping Links */}
        <div className="footer-column">
          <h3>Shop</h3>
          <ul>
            <li><a href="/products">All Products</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
            <li><a href="/best-sellers">Best Sellers</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-column">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/shipping">Shipping Policy</a></li>
            <li><a href="/returns">Return & Refund</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} IndiaEatZ. All Rights Reserved.</p>

        <div className="payment-methods">
          <span>UPI</span>
          <span>VISA</span>
          <span>Mastercard</span>
          <span>COD</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
