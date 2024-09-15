import "../styles/Footer.css"

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>About SpotWander</h3>
            <p>
              SpotWander is your ultimate guide to explore the beauty, culture,
              and heritage of India. Plan your trips, book tickets, and dive
              into immersive experiences.
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="fa-solid fa-envelope"></i>bitlords.sih@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> +91 xxxxxxxxxx
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>EM-4, EM-4/1, EM Block,
                Sector V, Bidhannagar, Kolkata, West Bengal 700091
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SpotWander. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
