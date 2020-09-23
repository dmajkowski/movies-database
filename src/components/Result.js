import React from "react";

function Result({ result, handleSelection }) {
  return (
    <div
      className="result"
      onClick={() => {
        handleSelection(result.imdbID);
      }}
    >
      <img src={result.Poster} alt="" />
      <h3>{result.Title}</h3>
    </div>
  );
}

export default Result;
