import React from "react";
import "../App.css";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="subtitle">
            You Are Invited To
            <br />
            The Wedding Of
          </div>
          <h1>Abdallah & Roqaya</h1>
          <div className="date-box">
            <div>On</div>
            <span>05 / 07 / 2025</span>
            <div>at 9:30 PM</div>
          </div>

          <div className="location">
            Hamouda Mosque
            <br />
            Al Aziziyah ,Minya al-Qamh
          </div>

          <a
            className="map-link"
            href="https://maps.app.goo.gl/8X4dxSKDy4YPkhyZ6"
            target="_blank"
            rel="noreferrer"
          >
            View Location on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
