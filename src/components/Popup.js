import React from "react";
import "./Popup.css";

function Popup({ selectedDetails, handleClosePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selectedDetails.Title} <span>({selectedDetails.Year})</span>
        </h2>
        <p className="rating">Rating: {selectedDetails.imdbRating}</p>
        <div className="plot">
          <img
            src={selectedDetails.Poster}
            alt="Movie poster"
            className="poster"
          />
          <p className="description">{selectedDetails.Plot}</p>
        </div>
        <button className="closePopup-btn" onClick={handleClosePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Popup;
