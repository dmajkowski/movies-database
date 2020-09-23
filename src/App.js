import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    inputValue: "",
    results: [],
    selected: {},
    selectedDetails: {},
  });
  const apiUrl = "http://www.omdbapi.com/?apikey=8e8bc6db";

  const handleClosePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {}, selectedDetails: {} };
    });
  };

  const handleSelection = (id) => {
    setState((prevState) => {
      return { ...prevState, selected: id };
    });
    fetch(`${apiUrl}&i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setState((prevState) => {
          return { ...prevState, selected: id, selectedDetails: data };
        });
      });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${apiUrl}&s=${state.inputValue}`)
        .then((response) => response.json())
        .then((data) => {
          let results = data.Search;
          setState((prevState) => {
            return { ...prevState, results };
          });
        });
    }
  };

  const handleInput = (e) => {
    let inputValue = e.target.value;

    setState((prevState) => {
      return { ...prevState, inputValue };
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Movie Database</h1>
      </header>
      <main className="app-main">
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} handleSelection={handleSelection} />
        {typeof state.selectedDetails.Title != "undefined" ? (
          <Popup
            selectedDetails={state.selectedDetails}
            handleClosePopup={handleClosePopup}
          />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
