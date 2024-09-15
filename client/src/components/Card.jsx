/* eslint-disable react/prop-types */
import "../styles/Card.css"

export default function Card({text, setJourney}) {
  return (
    <>
      <div className="box" onClick={() => (setJourney(text))}>
        <div className="box-image" data-text={text}></div>
      </div>
    </>
  );
}
