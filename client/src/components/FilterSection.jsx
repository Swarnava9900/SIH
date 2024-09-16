import "../styles/FilterSection.css";

export default function FilterSection() {
  return (
    <div className="border">
      <div className="filter">
        <div className="filter-box">
          <div className="search-destination">
            <div className="search-destination-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <input
              className="search1"
              type="text"
              placeholder="Select Destinations"
            />
          </div>
          <input className="search2" type="date" placeholder="Any Date" />

          <div className="all-places">
            <div className="all-place-icon">
              <i className="fa-solid fa-earth-asia"></i>
            </div>
            <input className="search3" type="text" placeholder="All" />
          </div>

          <div className="img-searchbar">
            <div className="search-bar">
              <input type="text" placeholder="Explore" id="search" />
            </div>
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
