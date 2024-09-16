import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";

// Custom debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Journey = lazy(() => import("./components/Journey"));
const Culture = lazy(() => import("./components/Culture"));
const Footer = lazy(() => import("./components/Footer"));
const Places = lazy(() => import("./components/Places"));
const FilterSection = lazy(() => import("./components/FilterSection"));
const CardContainer = lazy(() => import("./components/CardContainer"));

function App() {
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  // Scroll to top when selectedJourney or selectedState changes with debouncing
  useEffect(() => {
    if (selectedJourney || selectedState) {
      const scrollToTop = debounce(() => {
        window.scrollTo(0, 0);
      }, 100); // 100ms debounce time

      scrollToTop();
    }
  }, [selectedJourney, selectedState]);

  const delhi = [
    "Red Fort", "Qutub Minar", "Humayun's Tomb", "India Gate", "Lotus Temple",
    "Akshardham Temple", "Jama Masjid", "Rashtrapati Bhavan", "National Museum",
    "Jantar Mantar", "Kingdom of Dreams", "National Rail Museum", "Purana Qila",
    "National Zoological Park", "Delhi War Cemetery"
  ];

  const kolkata = [
    "Victoria Memorial", "Indian Museum", "Birla Planetarium", "Science City", "Eco Park",
    "Nicco Park", "Alipore Zoo", "Marble Palace", "Mother's Wax Museum", 
    "Birla Industrial & Technological Museum", "Prinsep Ghat", "Belur Math", 
    "Botanical Gardens", "Rabindra Sarobar", "Fort William"
  ];

  const shimla = [
    "Viceregal Lodge", "Kufri Fun World", "Chadwick Falls", "Himalayan Bird Park", 
    "Jakhoo Temple", "Himalayan Nature Park, Kufri", "Tara Devi Temple", 
    "Annandale Army Heritage Museum", "Shimla Heritage Museum", "Green Valley", 
    "The Mall Road", "Shimla State Museum", "Mashobra Adventure Park", 
    "Ice Skating Rink", "Naldehra Golf Course"
  ];

  const renderPage = () => {
    let list;
    
    if (selectedState === "delhi") {
      list = delhi;
    } else if (selectedState === "kolkata") {
      list = kolkata;
    } else if (selectedState === "shimla") {
      list = shimla;
    }

    if (selectedState) {
      return (
        <>
          <Suspense fallback={<div>Loading Hero...</div>}>
            <Hero preview="Welcome to" main={selectedState} page={selectedState} />
          </Suspense>
          <Suspense fallback={<div>Loading Filter...</div>}>
            <FilterSection />
          </Suspense>
          <div className={selectedState}>
            <Suspense fallback={<div>Loading Cards...</div>}>
              <CardContainer list={list} />
            </Suspense>
          </div>
        </>
      );
    }

    return (
      <>
        <Suspense fallback={<div>Loading Hero...</div>}>
          <Hero preview="Experience the" main="Magic of India" page="india" />
        </Suspense>
        <Suspense fallback={<div>Loading Journey...</div>}>
          <Journey setJourney={setSelectedJourney} />
        </Suspense>
        <Suspense fallback={<div>Loading Culture...</div>}>
          <Culture />
        </Suspense>
      </>
    );
  };

  return (
    <>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar setSelectedState={setSelectedState} selectedState={selectedState} />
      </Suspense>

      {selectedJourney ? (
        <Suspense fallback={<div>Loading Places...</div>}>
          <Places place={selectedJourney} goBack={setSelectedJourney} />
        </Suspense>
      ) : (
        renderPage()
      )}

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
