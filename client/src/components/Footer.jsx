import React from 'react'

function Footer() {
  return (
    <div>
      <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__desc">
          <h1>Finvoice 360</h1>
          <p>Your Personal Manager</p>
          <p id="phone">126-  555 - 5555</p>
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
          <a href="/" className="footer__link">Faq</a>
          <a href="/" className="footer__link">Terms</a>
        </div>
        <div className="footer__links">
          <h2 className="footer__title">Social Media</h2>
          <a href="/" className="footer__link">Facebook</a>
          <a href="/" className="footer__link">Instagram</a>
          <a href="/" className="footer__link">Whatsapp</a>
          <a href="/" className="footer__link">Twitter</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer