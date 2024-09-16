/* eslint-disable react/prop-types */
import "../styles/Card.css";

export default function Card({ key, text, setJourney }) {
  return (
    <div id={key} className="box" onClick={() => setJourney(text)}>
      <div className="box-image" data-text={text}></div>
    </div>
  );
}
