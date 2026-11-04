import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-banner">
        <h1>About IndiaEatz</h1>
        <p>Discover the Authentic Taste of India</p>
      </section>

      <section className="about-content">

        <div className="about-story">
          <h2>Our Story</h2>

          <p>
            Welcome to IndiaEatz! We are passionate about
            bringing the authentic taste of Indian cuisine
            to your table. Our platform celebrates India's
            rich food culture, traditional recipes and
            delicious flavours.
          </p>
        </div>

        <div className="about-boxes">

          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              To provide delicious, fresh and quality food
              while creating a wonderful food experience.
            </p>
          </div>

          <div className="about-card">
            <h2>Our Vision</h2>
            <p>
              To become a trusted destination for authentic
              Indian food and customer satisfaction.
            </p>
          </div>

          <div className="about-card">
            <h2>Our Values</h2>
            <p>
              Quality, freshness, customer satisfaction
              and the love of traditional Indian food.
            </p>
          </div>

        </div>

      </section>

      <section className="about-why">
        <h2>Why Choose IndiaEatz?</h2>

        <div className="why-items">
          <div>🍛 Authentic Indian Taste</div>
          <div>🥗 Fresh Ingredients</div>
          <div>❤️ Made With Love</div>
          <div>⭐ Quality Service</div>
        </div>
      </section>

    </div>
  );
}

// export default About;
export { About };