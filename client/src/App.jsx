import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Culture from "./components/Culture";
import Footer from "./components/Footer";
import Places from "./components/Places";
import FilterSection from "./components/FilterSection";
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

  // Helper function to handle Hero rendering
  const renderPage = () => {
    if (selectedState) {
      return (
        <>
          <Hero
            preview="Welcome to"
            main={selectedState}
            page={selectedState.toLowerCase()}
          />
          <FilterSection />

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
      <Navbar setSelectedState={setSelectedState} selectedState={selectedState}/>
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
