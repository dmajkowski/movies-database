import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=8e8bc6db";

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${apiUrl}&s=${state.s}`)
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
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Movie Database</h1>
      </header>
      <main className="app-main">
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
