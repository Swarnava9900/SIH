import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Culture from "./components/Culture";
import Footer from "./components/Footer";
import Places from "./components/Places";
import FilterSection from "./components/FilterSection";
import CardContainer from "./components/CardContainer";
import "./App.css";

function App() {
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  // Scroll to top whenever `selectedJourney` changes
  useEffect(() => {
    if (selectedJourney) {
      window.scrollTo(0, 0);
    }
  }, [selectedJourney]);

  useEffect(() => {
    if (selectedState || !selectedState) {
      window.scrollTo(0, 0);
    }
  }, [selectedState]);

  const delhi = [
    "Red Fort",
    "Qutub Minar",
    "Humayun's Tomb",
    "India Gate",
    "Lotus Temple",
    "Akshardham Temple",
    "Jama Masjid",
    "Rashtrapati Bhavan",
    "National Museum",
    "Jantar Mantar",
    "Kingdom of Dreams",
    "National Rail Museum",
    "Purana Qila",
    "National ZoologicalPark",
    "Delhi War Cemetry",
  ];

  const kolkata = [
    "Victoria Memorial",
    "Indian Museum",
    "Birla Planetarium",
    "Science City",
    "Eco Park",
    "Nicco Par",
    "Alipore Zoo",
    "Marble Palace",
    "Mother's Wax Museum",
    "Birla Industrial & Technological Museum",
    "Prinsep Ghat",
    "Belur Math",
    "Botanical Gardens",
    "Rabindra Sarobar",
    "Fort William",
  ];

  const shimla = [
    "Viceregal Lodge",
    "Kufri Fun World",
    "Chadwick Falls",
    "Himalayan Bird Park",
    "Jakhoo Temple",
    "Himalayan Nature Park, Kufri",
    "Tara Devi Temple",
    "Annandale Army Heritage Museum",
    "Shimla Heritage Museum",
    "Green Valley",
    "The Mall Road",
    "Shimla State Museum",
    "Mashobra Adventure Park",
    "Ice Skating Rink",
    "Naldehra Golf Course",
  ];

  // Helper function to handle Hero rendering
  const renderPage = () => {
    var list;

    if (selectedState == "delhi") {
      list = delhi;
    }
    if (selectedState == "kolkata") {
      list = kolkata;
    }
    if (selectedState == "shimla") {
      list = shimla;
    }

    if (selectedState) {
      return (
        <>
          <Hero
            preview="Welcome to"
            main={selectedState}
            page={selectedState}
          />
          <FilterSection />
          <div className={selectedState}>
            <CardContainer list={list} />
          </div>
        </>
      );
    }
    return (
      <>
        <Hero preview="Experience the" main="Magic of India" page="india" />
        <Journey setJourney={setSelectedJourney} />
        <Culture />
      </>
    );
  };

  return (
    <>
      <Navbar
        setSelectedState={setSelectedState}
        selectedState={selectedState}
      />
      {selectedJourney ? (
        <Places place={selectedJourney} goBack={setSelectedJourney} />
      ) : (
        <>{renderPage()}</>
      )}
      <Footer />
    </>
  );
}

export default App;
