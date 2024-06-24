import React, { useState } from 'react';
import "../App.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    concern: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <nav className="navbar" style={{marginTop:"10vh"}}>
        <a href="/" className="navbar__logo" style={{color:"white"}}>FINVOICE 360</a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="navbar__menu">
          <a href="index.html" className="navbar__link">Home</a>
          <a href="finance.html" className="navbar__link">Finance</a>
          <a href="inventory.html" className="navbar__link">Inventory</a>
          <a href="contact.html" className="navbar__link">Contact</a>
        </div>
      </nav>

      <div className="form-main" style={{width:"220vh"}}>
        <div className="main-wrapper">
          <h2 className="form-head">Contact Form</h2>
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="form-card">
              <input
                className="form-input"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="fullName">Full Name</label>
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="email">Email</label>
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="phoneNumber">Phone number</label>
            </div>

            <div className="form-card">
              <textarea
                className="form-textarea"
                maxlength="420"
                rows="3"
                name="concern"
                value={formData.concern}
                onChange={handleChange}
                required
              ></textarea>
              <label className="form-textarea-label" htmlFor="concern">Concern</label>
            </div>
            <div className="btn-wrap">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
