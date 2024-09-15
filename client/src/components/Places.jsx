/* eslint-disable react/prop-types */
import "../styles/Places.css";
import heritage from "../images/journey/heritage.jpg";
import culture from "../images/journey/culture.jpg";
import museum from "../images/journey/museum.jpg";
import architecture from "../images/journey/architecture.jpg";
import nature from "../images/journey/nature.jpg";
import spiritual from "../images/journey/spiritual.jpg";

export default function Places({ place, goBack }) {
  // Mapping place names to corresponding images
  const placeImages = {
    "Heritage": heritage,
    "Culture": culture,
    "Museum": museum,
    "Architecture": architecture,
    "Nature": nature,
    "Spiritual": spiritual
  };

  return (
    <div className="container">
      <div className="museum-info">
        <div className="museum-image">
          {/* Dynamically rendering the image based on the place prop */}
          <img src={placeImages[place]} alt={place} />
        </div>
        <div className="museum-details">
          <h1>{place}</h1>
          <p>
            <strong>History:</strong> Established in 1814, it is the oldest and
            largest museum in India, showcasing ancient artifacts, fossils, and
            mummies.
          </p>
          <p>
            <strong>How to Reach:</strong> Located near Park Street Metro
            Station. Accessible by metro, bus, and taxi.
          </p>
          <p>
            <strong>Famous For:</strong> Egyptian mummies, Buddhist relics, and
            Mughal art.
          </p>
          <p>
            <strong>Other Experiences:</strong> Explore nearby Park Street for
            cafes, restaurants, and street food.
          </p>
          <div className="ticket-prices">
            <button className="prices">Price for </button>
            <button className="indians">Indians - ₹50</button>
            <button className="foreigners">Foreigners - ₹500</button>
          </div>
        </div>
      </div>
      <button className="go-back more-btn" onClick={() => goBack(null)}>
        Go Back
      </button>
    </div>
  );
}
