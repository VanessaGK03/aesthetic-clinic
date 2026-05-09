import "./Footer.css";

import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* info */}
        <div className="footer-section">
          <h3>DermaVie</h3>
          <p>
            Enhancing natural beauty with modern aesthetic treatments and
            personalized care.
          </p>
        </div>

        {/* links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#procedures">Procedures</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contacts">Contact</a></li>
          </ul>
        </div>

        {/* contacts */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Sofia, Bulgaria</p>
          <p>+359 88 123 4567</p>
          <p>info@aestheticclinic.com</p>
        </div>

        {/* social media */}
        <div className="footer-section">
            <h4>Follow Us</h4>

            <div className="socials">
                <a href="https://instagram.com" target="_blank">
                <FaInstagram />
                </a>

                <a href="https://facebook.com" target="_blank">
                <FaFacebookF />
                </a>

                <a href="https://tiktok.com" target="_blank">
                <FaTiktok />
                </a>
            </div>
        </div>

      </div>

      
      <div className="footer-bottom">
        <p>© 2026 Aesthetic Clinic. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;