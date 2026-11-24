
import React, { useState, useEffect } from "react";
import { useCart } from "../cart-context";
import { useLocation, useNavigate } from "react-router-dom";
import "./cart-detail.css";

const CartDetail = ({
  product: propProduct,
  onBack,
  onAddToCart,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Scroll to the top when the product page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.state?.product?.id, propProduct?.id]);
  // Get product from props OR navigation state
  const product = propProduct || location.state?.product;

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Check product exists
  if (!product) {
    return (
      <div className="product-detail-page">
        <h2>No Product Selected!</h2>
        <p>Please select a product from Our Special Menu.</p>

        <button
          className="back-button"
          onClick={() => {
            if (onBack) {
              onBack();
            } else {
              navigate("/");
            }
          }}
        >
          ← Back to Products
        </button>
      </div>
    );
  }

  // Product images
  const images = product.images?.length
    ? product.images
    : product.image
    ? [product.image]
    : [];

  const price = Number(product.price) || 0;
  const originalPrice =
    Number(product.originalPrice) || price;

  const discount =
    originalPrice > 0
      ? Math.round(
          ((originalPrice - price) / originalPrice) * 100
        )
      : 0;

  const handleAddToCart = () => {
  if (onAddToCart) {
    onAddToCart({ ...product, quantity });
  } else {
    addToCart({ ...product, quantity });
  }

  alert(`${product.title} added to cart!`);
};

  const handleBuyNow = () => {
    alert(`Proceeding to buy ${product.title}`);
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate("/menu");
    }
  };

  return (
    <div className="product-detail-page">

      <button className="back-button" onClick={handleBack}>
        ← Back to Products
      </button>

      <div className="product-detail-container">

        {/* LEFT SIDE - IMAGE GALLERY */}
        <div className="product-gallery">

          <div className="thumbnail-list">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} ${index + 1}`}
                className={
                  selectedImage === index
                    ? "thumbnail active-thumbnail"
                    : "thumbnail"
                }
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>

          <div className="main-product-image">
            {images.length > 0 ? (
              <img
                src={images[selectedImage]}
                alt={product.title}
              />
            ) : (
              <p>No image available</p>
            )}
          </div>

        </div>

        {/* RIGHT SIDE - PRODUCT INFORMATION */}
        <div className="product-information">

          <p className="brand-name">
            {product.brand || "IndiaEatz Collection"}
          </p>

          <h1>{product.title}</h1>

          <div className="product-rating">
            <span className="rating-badge">
              {product.rating || "4.3"} ★
            </span>

            <span>
              {product.reviews || 631} Ratings
            </span>
          </div>

          {/* PRICE SECTION */}
          <div className="price-section">

            <p className="discount">
              {discount}% OFF
            </p>

            <span className="original-price">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>

            <h2>
              ₹{price.toLocaleString("en-IN")}
            </h2>

            <p className="tax-info">
              Inclusive of all applicable taxes
            </p>

          </div>

          {/* OFFERS */}
          <div className="offer-section">

            <h3>Available Offers</h3>

            <div className="offer-box">
              <strong>Special Offer</strong>
              <p>Get exciting discounts on selected products.</p>
            </div>

            <div className="offer-box">
              <strong>Bank Offer</strong>
              <p>Additional savings with eligible bank cards.</p>
            </div>

            <div className="offer-box">
              <strong>Special Price</strong>
              <p>Extra discounts on selected purchases.</p>
            </div>

          </div>

          {/* PRODUCT DESCRIPTION */}
          <div className="product-description">

            <h3>Product Description</h3>

            <p>
              {product.description ||
                "Discover premium quality and excellent value with this product."}
            </p>

          </div>

          {/* DELIVERY INFORMATION */}
          <div className="delivery-section">

            <h3>Delivery Details</h3>

            <p>📍 Delivery available at your location</p>
            <p>🚚 Estimated delivery in 20 minutes</p>
            <p>✓ Quality checked product</p>

          </div>

          {/* QUANTITY */}
          <div className="quantity-section">

            <label>Quantity:</label>

            <button
              onClick={() =>
                setQuantity((q) => Math.max(1, q - 1))
              }
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>

          </div>

          {/* ACTION BUTTONS */}
          <div className="product-action-buttons">

            <button
              className="add-cart-button"
              onClick={handleAddToCart}
            >
              🛒 ADD TO CART
            </button>

            <button
              className="buy-now-button"
              onClick={handleBuyNow}
            >
              BUY NOW
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CartDetail;
