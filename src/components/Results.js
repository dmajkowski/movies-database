import React from "react";
import Result from "./Result";
import "./Results.css";

function Results({ results, handleSelection }) {
  return (
    <section className="results">
      {results.map((result) => (
        <Result
          key={result.imdbID}
          result={result}
          handleSelection={handleSelection}
        />
      ))}
    </section>
  );
}

export default Results;
