import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section contact-info">
          <img src="https://via.placeholder.com/150x30?text=IndiaRetailing" alt="India Retailing" />
          <p><strong>New Delhi</strong><br />
            Images Multimedia Ltd.<br />
            S-61 A, Pocket S, Okhla Phase II,<br />
            Okhla Industrial Estate, New Delhi 110020
          </p>
          <p><strong>Mumbai</strong><br />
            Images Multimedia Ltd.<br />
            E 519, Floral Deck Plaza, Central MIDC Road,<br />
            Opp. SEEPZ, Andheri (East), Mumbai 400093
          </p>
          <p><strong>Contact us</strong><br />
            📞 +91-9867355551<br />
            ✉️ editor@indianretailing.com
          </p>
          <div className="social-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="FB" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
          </div>
          <div className="app-buttons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
          </div>
        </div>

        {/* Column Sections */}
        <div className="footer-section">
          <h4>ABOUT US</h4>
          <ul>
            <li>About IndiaRetailing.com</li>
            <li>Meet the team</li>
            <li>Advertise with us</li>
            <li>Contact us</li>
          </ul>
          <h4>Bookstore</h4>
          <ul>
            <li>Magazines</li>
            <li>Yearbooks</li>
            <li>Other publications</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>Fashion & Lifestyle</li>
            <li>Beauty & Wellness</li>
            <li>Food & Beverage</li>
            <li>Consumer Durables & IT</li>
            <li>Entertainment</li>
            <li>Home Décor & Furnishing</li>
            <li>Specialty Retail</li>
          </ul>
          <h4>Videos</h4>
          <ul>
            <li>Retail with Rasul Bailay</li>
            <li>The Store</li>
            <li>IR Studio</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>Leaders Ink</li>
            <li>People</li>
            <li>Finance & Funding</li>
            <li>D2C</li>
            <li>Shopping Centers</li>
            <li>Results</li>
            <li>Research</li>
            <li>Case Studies</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li>India Food Forum</li>
            <li>Shopping Centre Next</li>
            <li>Phygital Retail Convention</li>
            <li>India D2C Summit & Awards</li>
            <li>Internet Commerce Summit</li>
          </ul>
          <h4>Retail Functions</h4>
          <ul>
            <li>Marketing</li>
            <li>Technology</li>
            <li>Operations</li>
            <li>HR</li>
            <li>Supply Chain</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
