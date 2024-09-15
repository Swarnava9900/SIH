/* eslint-disable react/prop-types */
import CardContainer from "./CardContainer";

const journeyList = [
  "Heritage",
  "Culture",
  "Museum",
  "Architecture",
  "Nature",
  "Spiritual",
];

export default function Journey({ setJourney }) {
  return (
    <>
      <div className="journey-across-india">
        <div className="journey-heading">
          <h2>Journey Across India</h2>
        </div>
        <div><h2>Explore the diverse beauty of India through curated categories</h2></div>

        <div className="select-state">
          <input type="text" id="select-state" placeholder="Search Places to visit" />
          <div className="stateselection-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="collection-of-journey">
          <CardContainer list={journeyList} setJourney={setJourney}></CardContainer>
        </div>
      </div>
    </>
  );
}
