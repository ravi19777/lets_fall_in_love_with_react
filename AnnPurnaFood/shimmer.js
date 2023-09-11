import "./index.css";

const Shimmer = () => {
  return (
    <>
      <div className="search-and-filter-container">
        <div className="filter-container">
          <i className="fa fa-filter" aria-hidden="true"></i>{" "}
          <span>filter</span>
        </div>

        <div className="body-search-box-container">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for Restaurants and Foods"
          />
          <button>Search</button>
        </div>
      </div>
      <div className="shimmer-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </>
  );
};

export default Shimmer;
