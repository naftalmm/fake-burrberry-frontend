import React from 'react';

export default() => {
  return (
    <footer>
      <div className="footer-info-container hidden-xs">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h4 className="footer-info-header">CUSTOMER SERVICE</h4>
              <a className="footer-info-link">Contact Us</a>
              <a className="footer-info-link">Payment</a>
              <a className="footer-info-link">Shipping</a>
              <a className="footer-info-link">Returns</a>
              <a className="footer-info-link">Faqs</a>
              <a className="footer-info-link">Live Chat</a>
              <a className="footer-info-link">The Burberry App</a>
              <a className="footer-info-link">Store Locator</a>
            </div>
            <div className="col-md-3">
              <h4 className="footer-info-header">OUR COMPANY</h4>
              <a className="footer-info-link">Our History</a>
              <a className="footer-info-link">Burberry Group Plc</a>
              <a className="footer-info-link">Careers</a>
              <a className="footer-info-link">Corporate Responsibility</a>
              <a className="footer-info-link">Site Map</a>
            </div>
            <div className="col-md-3">
              <h4 className="footer-info-header">LEGAL &amp; COOKIES</h4>
              <a className="footer-info-link">Terms &amp; Conditions</a>
              <a className="footer-info-link">Privacy Policy</a>
              <a className="footer-info-link">Cookie Policy</a>
              <a className="footer-info-link">Accessibility Statement</a>
              <a className="footer-info-link">Japan Only - SCTL indications</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-buttons-container">
        <button className="footer-button" type="button">Shipping country: Russian Federation</button>
        <button className="footer-button" type="button">Language: English</button>
      </div>
      <div className="footer-help">
        <h4 className="footer-help-header">Need help?</h4>
        <a className="footer-contacts-info">Find out more and contact us</a>
      </div>
    </footer>    
  );    
}