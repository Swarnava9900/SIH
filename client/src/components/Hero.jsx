/* eslint-disable react/prop-types */
import "../styles/Hero.css";

export default function Hero({ preview, main, page }) {
  return (
    <div className="nav-image" id={page}>
      <div className="image-text">
        <div className="text1">
          <p>{preview}</p>
        </div>
        <div className="text2">
          <p>{main}</p>
        </div>
      </div>

      {/* Uncomment and use the below code as needed */}
      {/* 
      <div className="img-searchbar">
        <div className="search-bar">
          <input type="text" placeholder="Explore India" id="search" />
        </div>
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div className="website-agenda">
        <div className="website-agenda-texts">
          <div className="agenda-item">
            <div className="agenda-icon">
              <i className="fa-solid fa-circle-nodes"></i>
            </div>
            <div className="agenda-text">
              <p>Provides a visual representation of destinations, attractions, and activities.</p>
            </div>
          </div>

          <div className="agenda-item">
            <div className="agenda-icon">
              <i className="fa-solid fa-user-group"></i>
            </div>
            <div className="agenda-text">
              <p>Offers travelers a reliable perspective of destinations.</p>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}
