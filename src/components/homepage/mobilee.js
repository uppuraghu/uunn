// src/components/MobileView.js
import React from 'react';
import logo from '../images/fl.png';
import '../../App.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

function MobileView() {
  return (
    <div className="mobile-view-container">
      <div className="mobile-header">
        <img src={logo} alt="Logo" className="mobile-logo" />
        <h2 className="mobile-title">Welcome to Unimart Overseas</h2>
      </div>

      <div className="mobile-content">
        <p>
          Discover the best study abroad programs, explore top universities, and get expert career counseling to shape your future.
        </p>

        <button className="mobile-btn">
          <Link to="/contact">Get Free Assessment</Link>
        </button>

        <div className="mobile-contact">
          <a href="tel:+918978779676" className="mobile-call-btn">
            Call Now
          </a>
          <a href="https://wa.me/918978779676" className="mobile-whatsapp-btn">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileView;
