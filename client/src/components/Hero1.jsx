/* eslint-disable react/prop-types */
import "../styles/Hero.css";

export default function Hero1({ main, page }) {
  return (
    <div className="nav-image" id={page}>
    <div className="image-text">
      <div className="text2">
        <p>{main}</p>
      </div>
    </div></div>
  )
}
