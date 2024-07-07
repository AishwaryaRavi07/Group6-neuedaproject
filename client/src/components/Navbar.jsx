import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar" style={{marginTop:"173vh"}}>
      <a href="/" className="navbar__logo">FINVOICE 360</a>
      <div className="navbar__toggle" id="mobile-menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="navbar__menu">
        <a href="/" className="navbar__link">Home</a>
        <a href="/transaction" className="navbar__link">Finance</a>
        <a href="/invoice" className="navbar__link">Invoice</a>
        <a href="/contact" className="navbar__link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
