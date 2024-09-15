import { useState } from "react";
import CardContainer from "./CardContainer";

export default function Culture() {
  const cultureList = [
    "Durga Puja",
    "Ganesh Chaturthi",
    "Pongal",
    "Eid-ul-Fitr",
    "Dussehra",
    "Diwali",
    "Holi",
    "Navratri",
    "Onam",
    "Raksha Bandhan",
    "Makar Sankranti",
    "Lohri"
  ];

  // State to track whether more cards are shown or not
  const [showMore, setShowMore] = useState(false);

  // Function to handle button click and toggle the state
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  // Render the first 6 items or all depending on the state
  const visibleCards = showMore ? cultureList : cultureList.slice(0, 6);

  return (
    <>
      <div className="The-essence-of-indian-culture">
        <div className="indian-culture-heading">
          <h2>The Essence of Indian Culture</h2>
        </div>
        <div className={`collection-of-culture ${showMore ? 'expanded' : 'collapsed'}`}>
          <CardContainer list={visibleCards}></CardContainer>
        </div>

        <div className="more-btn-container">
          <button className="more-btn" onClick={handleToggle}>
            {showMore ? "Show Less" : "More"}
          </button>
        </div>
      </div>
    </>
  );
}
