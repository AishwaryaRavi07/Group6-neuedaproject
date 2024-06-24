import React from 'react';

const Inventory = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <a href="/" className="navbar__logo">FINVOICE 360</a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="navbar__menu">
          <a href="index.html" className="navbar__link">Home</a>
          <a href="finance.html" className="navbar__link">Finance</a>
          <a href="inventory.html" className="navbar__link">Invoices</a>
          <a href="contact.html" className="navbar__link">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero__content">
          <h1 className="animate-hero">Invoice Management</h1>
          <p className="animate-hero">Manage your invoices efficiently</p>
        </div>
      </div>

      {/* Invoice Section */}
      <div className="inventory">
        <div className="inventory__container">
          <h1 className="inventory__heading">Invoice List</h1>
          <table className="inventory__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Vendor</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Vendor A</td>
                <td>Product X</td>
                <td>150</td>
                <td>2024-06-15</td>
                <td>Paid</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Vendor B</td>
                <td>Product Y</td>
                <td>300</td>
                <td>2024-06-18</td>
                <td>Pending</td>
              </tr>
              {/* Add more invoices as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="footer__wrapper">
          <div className="footer__desc">
            <h1>Finvoice 360</h1>
            <p>Your Personal Manager</p>
            <p id="phone">126- 555 - 5555</p>
          </div>
          <div className="footer__links">
            <h2 className="footer__title">Contact us</h2>
            <a href="/" className="footer__link">Contact</a>
            <a href="/" className="footer__link">Support</a>
            <a href="/" className="footer__link">About</a>
          </div>
        </div>
        <div className="footer__wrapper">
          <div className="footer__links">
            <h2 className="footer__title">Membership</h2>
            <a href="/" className="footer__link">Pricing</a>
            <a href="/" className="footer__link">Plans</a>
            <a href="/" className="footer__link">FAQ</a>
            <a href="/" className="footer__link">Terms</a>
          </div>
          <div className="footer__links">
            <h2 className="footer__title">Social Media</h2>
            <a href="/" className="footer__link">Facebook</a>
            <a href="/" className="footer__link">Instagram</a>
            <a href="/" className="footer__link">WhatsApp</a>
            <a href="/" className="footer__link">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
