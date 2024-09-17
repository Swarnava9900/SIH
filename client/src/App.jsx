import { useState, useEffect, lazy, Suspense } from "react";
import "./styles/App.css";

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
const Hero1 = lazy(() => import("./components/Hero1"));
const Journey = lazy(() => import("./components/Journey"));
const Culture = lazy(() => import("./components/Culture"));
const Footer = lazy(() => import("./components/Footer"));
const FilterSection = lazy(() => import("./components/FilterSection"));
const CardContainer = lazy(() => import("./components/CardContainer"));

function App() {
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false); // State to control chatbot visibility

  // Scroll to top when selectedJourney or selectedState changes with debouncing
  useEffect(() => {
    if (selectedJourney || selectedState) {
      const scrollToTop = debounce(() => {
        window.scrollTo(0, 0);
      }, 100); // 100ms debounce time

      scrollToTop();
    }
  }, [selectedJourney, selectedState]);

  // Function to toggle chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev); // Toggle chatbot state
  };

  // Chatbot script loading and showing chatbot conditionally
  useEffect(() => {
    if (showChatbot) {
      // Add Dialogflow script dynamically only when chatbot is toggled on
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.body.appendChild(script);

      // Append df-messenger element only when chatbot is toggled on
      const dfMessenger = document.createElement("df-messenger");
      dfMessenger.setAttribute("chat-title", "spotwander");
      dfMessenger.setAttribute("agent-id", "518be47c-1836-47e9-836a-b47140ac93a0");
      dfMessenger.setAttribute("language-code", "en");
      document.body.appendChild(dfMessenger);

      return () => {
        // Cleanup script and df-messenger when chatbot is toggled off
        document.body.removeChild(script);
        document.body.removeChild(dfMessenger);
      };
    }
  }, [showChatbot]);

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
        <Navbar 
          setSelectedState={setSelectedState} 
          selectedState={selectedState} 
          setJourney={setSelectedJourney} 
          selectedJourney={selectedJourney} 
          toggleChatbot={toggleChatbot} // Pass toggleChatbot to Navbar
        />
      </Suspense>

      {selectedJourney ? (
        <Suspense fallback={<div>Loading Journeys...</div>}>
          <Hero1 
            main={selectedJourney} 
            page={selectedJourney.toLowerCase()} 
          />
        </Suspense>
      ) : (
        renderPage()
      )}

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>

      {/* Render the chatbot when toggled on */}
      {showChatbot && (
        <div id="chatbot-container">
          {/* Dialogflow chatbot will be appended to this container */}
        </div>
      )}
    </>
  );
}

export default App;
