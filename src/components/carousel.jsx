import React, { useState, useEffect } from "react";
import "./carousel.css";

const slides = [
  
  {
    heading: "Discover the Taste of India",
    description:
      "Experience India's rich culinary heritage with authentic flavors, traditional spices, and unforgettable dishes.",
    image: "/images/car1.png",
  },
  {
    heading: "Authentic Indian Flavors",
    description:
      "From spicy curries to aromatic biryanis, explore the delicious flavors that make Indian cuisine special.",
    image: "/images/car2.png",
  },
  {
    heading: "Fresh, Delicious & Made with Love",
    description:
      "Enjoy fresh ingredients, traditional recipes, and the comforting taste of homemade Indian food.",
    image: "/images/car3.png",
  },
  {
    heading: "Your Journey into Indian Cuisine",
    description:
      "Discover regional specialties, timeless recipes, and exciting new dishes with IndiaEatz.",
    image: "/images/car4.png",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  // Automatically slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Previous slide
  const prevSlide = () => {
    setCurrent((previous) =>
      previous === 0 ? slides.length - 1 : previous - 1
    );
  };

  // Next slide
  const nextSlide = () => {
    setCurrent((previous) => (previous + 1) % slides.length);
  };

  return (
    <section className="india-carousel" aria-label="IndiaEatz food carousel">

      {/* Slides */}
      <div
        className="india-carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="india-carousel-slide" key={index}>

            {/* Background Image */}
            <img
              className="india-carousel-image"
              src={slide.image}
              alt={slide.heading}
            />

            {/* Dark Overlay */}
            <div className="india-carousel-overlay"></div>

            {/* Heading and Description */}
            <div className="india-carousel-content">
              <span className="india-carousel-label">
                WELCOME TO INDIAEATZ
              </span>

              <h1>{slide.heading}</h1>

              <p>{slide.description}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Previous Arrow */}
      <button
        type="button"
        className="india-carousel-arrow india-carousel-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      {/* Next Arrow */}
      <button
        type="button"
        className="india-carousel-arrow india-carousel-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Slide Indicators */}
      <div className="india-carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`india-carousel-dot ${
              current === index ? "active" : ""
            }`}
            aria-current={current === index ? "true" : undefined}
          ></span>
        ))}
      </div>

    </section>
  );
}

export default Carousel;
