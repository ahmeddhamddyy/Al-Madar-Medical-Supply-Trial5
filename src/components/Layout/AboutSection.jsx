import React from 'react';
import aboutImage from "../../assets/General/gallery1.png"; // <-- Make sure to replace this with your actual image path
import './AboutSection.css'; // We'll create this CSS file next

function AboutSection() {
  const checkListItems = [
    "ISO certified",
    "Professional Staff",
    "We celebrate differences and consider them as a powerful stimulant of creative thinking",
  ];

  return (
    <section id="our-story" className="about-section py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          
          {/* Left Column: Text Content */}
          <div className="col-lg-6 wow animate__animated animate__fadeInLeft" data-wow-delay="0.1s">
            <div className="section-title-alt mb-4">
              <h6 className="text-primary">ABOUT US</h6>
            </div>
            <h1 className="display-5 fw-bold mb-4">
              Achieving Excellence Through Things That Really Matter
            </h1>
            <p className="lead about-paragraph mb-4">
              At Al Madar, our success relies on the strong relationships we build and maintain with our partners.
            </p>
            <div className="row g-4">
              {checkListItems.map((item, index) => (
                // Use a two-column layout for the checklist items
                <div key={index} className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-check-circle text-primary me-3 mt-1 checklist-icon"></i>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-6 wow animate__animated animate__fadeInRight" data-wow-delay="0.5s">
            <div className="about-image-wrapper">
              <img 
                src={aboutImage} 
                alt="A dedicated healthcare professional at Al Madar Medical" 
                className="img-fluid rounded shadow-lg" 
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default AboutSection;