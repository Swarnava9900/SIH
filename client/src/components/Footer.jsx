import "../styles/Footer.css";

export default function Footer() {
  const quickLinks = [
    { href: "#", text: "Home" },
    { href: "#", text: "Explore" },
    { href: "#", text: "Services" },
    { href: "#", text: "Contact" },
  ];

  const socialLinks = [
    { href: "#", className: "fa-brands fa-facebook", label: "Facebook" },
    { href: "#", className: "fa-brands fa-twitter", label: "Twitter" },
    { href: "#", className: "fa-brands fa-instagram", label: "Instagram" },
    { href: "#", className: "fa-brands fa-linkedin", label: "LinkedIn" },
  ];

  return (
    <footer id="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>About SpotWander</h3>
          <p>
            SpotWander is your ultimate guide to explore the beauty, culture,
            and heritage of India. Plan your trips, book tickets, and dive
            into immersive experiences.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:bitlords.sih@gmail.com">bitlords.sih@gmail.com</a>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              +91 xxxxxxxxxx
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              EM-4, EM-4/1, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a href={social.href} key={index} aria-label={social.label}>
                <i className={social.className}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 SpotWander. All rights reserved.</p>
      </div>
    </footer>
  );
}
