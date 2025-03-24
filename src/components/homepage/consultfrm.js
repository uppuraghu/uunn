import React, { useState } from "react";
import emailjs from "emailjs-com";
import './visa.css';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studyDestination: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare template parameters for EmailJS
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      studyDestination: formData.studyDestination,
      message: formData.message,
      to_email: "uppuraghu21@gmail.com", // Target email
    };

    // Send email using EmailJS
    emailjs.send(
        "service_h7log1r", // Replace with your actual service ID
        "template_reqyq74", // Replace with your actual template ID
        templateParams,
        "4M9NBDeam5qtZtWYb" // Replace with your actual public key
      )
      .then(
        (response) => {
          alert("Form submitted successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            studyDestination: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send form. Please try again.");
        }
      );
  };

  return (
    <div className="form-container">
      <div className="sub">
        <h1>Book a Free Consultation</h1>
      </div>

      <form onSubmit={handleSubmit} className="form">
        {/* First Name & Last Name */}
        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email & Phone Number */}
        <div className="row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Study Destination Dropdown */}
        <select
          name="studyDestination"
          value={formData.studyDestination}
          onChange={handleChange}
          required
        >
          <option value="">Select Preferred Study Destination</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
        </select>

        {/* Message Input */}
        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ConsultationForm;
