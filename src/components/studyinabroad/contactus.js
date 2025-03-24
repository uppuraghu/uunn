import React, { useState } from 'react';
import './study.css';
import { Link } from "react-router-dom";
import logo3 from '../images/l.png';
import glob from '../images/globes.png';

const makeCall = () => {
    window.location.href = "tel:+6281187094";
};

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:your-email@example.com?subject=Free Assessment Request&body=
        Name: ${formData.name}%0D%0A
        Email: ${formData.email}%0D%0A
        Phone: ${formData.phone}%0D%0A
        Subject: ${formData.subject}%0D%0A
        Message: ${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className='usmin'>
            {/* Navbar Section */}
            <div className='logsec'>
                <img style={{ height: '60px', width: '200px', marginTop: '-10px', marginLeft: '70px' }} src={logo3} alt='lg' />
                <img style={{ height: '100px', width: '330px', marginLeft: '300px', marginTop: '-10px' }} className='imgt' src={glob} alt='glb' />
                <button onClick={makeCall} style={{ marginLeft: '460px', borderRadius: '20%' }}>Contact us</button>
            </div>

            <header className="header">
                <nav className="custom-navbar">
                    <ul className="nav-links">
                        <li><Link to="/" className="home-button">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/studyloans">Study Loans</Link></li>
                        <li><Link to="/englishtests">English Tests</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Contact Form Section */}
            <div className="contact-container">
                <div className="form-section">
                    <h2>Leave a Message Here</h2>
                    <p>We will connect you to VisaPress Consultant ASAP.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name *</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Mobile No *</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Mobile No"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="submit-btn">
                            SUBMIT
                        </button>
                    </form>
                </div>

                {/* Contact Info Section */}
                <div className="contact-info">
                    <h3>Quick Contact</h3>
                    <p>
                        We are pleased to speak with you to discuss your qualifications and
                        options under the various immigration programs and answer any
                        questions or concerns you may have.
                    </p>
                    <h4>Phone</h4>
                    <p>Phone: 8978779676</p>
                    <p>Land Line: 040 45174985</p>

                    <h4>Inquire with us</h4>
                    <p>info@unimartoverseas.com</p>

                    <h4>Send your feedback</h4>
                    <p>support@unimartoverseas.com</p>

                    <h4>Head Office</h4>
                    <p>Ameerpet, Hyderabad.</p>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-container">
                <h3>Our Location</h3>
                <iframe
                    title="Hyderabad Location"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76124.35865327444!2d78.38601042042334!3d17.433816502755835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e24166eb85%3A0xc96b57678d59b5e2!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1707938245678"
                    allowFullScreen
                ></iframe>
            </div>

        </div>
    );
}

export default Contact;
