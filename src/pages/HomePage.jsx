import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";

import AboutSection from "../components/Layout/AboutSection";

// Import images
import carousel1 from "../assets/General/carousel-1.jpg";
import carousel2 from "../assets/General/carousel-2.jpg";
import carousel3 from "../assets/General/carousel 10.jpg";

// jQuery for Owl Carousel
import $ from "jquery";
window.jQuery = window.$ = $;

export default function AlMadarWebsite() {
  // Spinner + animations
  useEffect(() => {
    const hideSpinner = () => {
      const spinner = document.getElementById("spinner");
      if (spinner) spinner.classList.remove("show");
    };
    const timer = setTimeout(hideSpinner, 500);

    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    import("wowjs").then(({ WOW }) => new WOW().init());

    return () => clearTimeout(timer);
  }, []);

  // Initialize carousel after DOM loads
  useEffect(() => {
    import("owl.carousel").then(() => {
      setTimeout(() => {
        if ($("#header-carousel").length) {
          $("#header-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: true,
            dots: false,
            navText: [
              '<i class="bi bi-chevron-left"></i>',
              '<i class="bi bi-chevron-right"></i>',
            ],
          });
        }
      }, 200); // small delay ensures images are loaded
    });
  }, []);

  const slides = [
    {
      img:carousel1, // use .src so Owl gets the correct URL
      text: "Understanding and proactively responding to our customers' needs.",
    },
    {
      img: carousel2,
      text: "Providing a productive business environment and caring for our staff.",
    },
    {
      img: carousel3,
      text: "Direct communication fostering a transparent and pro-compliant culture.",
    },
  ];

  return (
    <div>
      {/* Spinner */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary m-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark m-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary m-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      {/* Carousel */}
      <div className="container-fluid p-0" id="home">
        <div id="header-carousel" className="owl-carousel owl-theme">
          {slides.map((slide, i) => (
            <div key={i} className="item">
              <img
                className="d-block w-100"
                src={slide.img}
                alt={`Slide ${i + 1}`}
                style={{ height: "80vh", objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center bg-dark bg-opacity-50 rounded p-4">
                <h1 className="display-5 fw-bold text-white text-center">
                  {slide.text}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* Mission */}
            <div className="col-lg-6">
              <div className="p-4 bg-white shadow rounded h-100 d-flex flex-column">
                <div className="d-flex align-items-start">
                  <div className="mission-vision-icon me-4">
                    <i className="fas fa-bullseye fa-2x"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h2 className="fw-bold text-primary mb-2">Our Mission</h2>
                    <p className="mb-0">
                      To empower healthcare professionals by providing reliable,
                      high-quality medical supplies and innovative solutions.
                      We are dedicated to enhancing patient care through
                      exceptional service and unwavering commitment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="col-lg-6">
              <div className="p-4 bg-white shadow rounded h-100 d-flex flex-column">
                <div className="d-flex align-items-start">
                  <div className="mission-vision-icon me-4">
                    <i className="fas fa-eye fa-2x"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h2 className="fw-bold text-primary mb-2">Our Vision</h2>
                    <p className="mb-0">
                      To be the most trusted name in medical supplies,
                      pioneering advancements that set new standards in
                      healthcare delivery and contribute to a healthier future
                      for all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Back to Top */}
      <a
        href="#top"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
