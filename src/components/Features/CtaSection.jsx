import React from 'react';
import CountUp from 'react-countup';
import ctaBackgroundImage from '../../assets/General/carousel-1.jpg'; // <-- Replace with your background image
import './CtaSection.css'; // We'll update this next

function CtaSection() {
  // Data for the animated counters. This makes it easy to change later.
  const stats = [
    {
      icon: 'fas fa-user-md',
      end: 50,
      suffix: '+',
      label: 'Certified Professionals',
    },
    {
      icon: 'fas fa-award',
      end: 99,
      suffix: '%',
      label: 'Patient Satisfaction',
    },
    {
      icon: 'fas fa-procedures',
      end: 1000,
      suffix: '+',
      label: 'Successful Procedures',
    },
  ];

  return (
    <section 
      className="cta-section" 
      style={{ backgroundImage: `url(${ctaBackgroundImage})` }}
    >
      <div className="cta-overlay">
        <div className="container">
          {/* Main Title and Paragraph */}
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-4 fw-bold text-white mb-4">
                We Are A Certified Medical Care Services Company
              </h1>
              <p className="lead text-white-50 mb-5">
                We ensure our staff stay up-to-date with the latest advancements through continuous education. As a certified company, we adhere to strict guidelines to maintain the highest standards of patient care, confidentiality, and safety.
              </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="cta-divider wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" />

          {/* Animated Stats Section */}
          <div className="row text-center mt-5">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-4 wow animate__animated animate__fadeInUp" data-wow-delay={`${0.5 + index * 0.2}s`}>
                <div className="stat-box">
                  <i className={`${stat.icon} stat-icon mb-3`}></i>
                  <h2 className="stat-number text-white fw-bold">
                    <CountUp end={stat.end} duration={3} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                  </h2>
                  <p className="stat-label text-white-50">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default CtaSection;