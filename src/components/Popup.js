import React from "react";

function Popup({ selectedDetails, handleClosePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h3>
          {selectedDetails.Title} <span>{selectedDetails.Year}</span>
        </h3>
        <p className="rating">Rating: {selectedDetails.imdbRating}</p>
        <div className="plot">
          <img
            src={selectedDetails.Poster}
            alt="Movie poster"
            className="poster"
          />
          <p className="description">{selectedDetails.Plot}</p>
          <button className="closePopup-btn" onClick={handleClosePopup}>
            Close
          </button>
        </div>
      </div>
    </section>
  );
}

export default Popup;
