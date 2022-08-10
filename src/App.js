import React from "react";
import './App.css'
import B3 from "./components/B3/B3";
import Dashboard from "./components/Dashboard/Dashboard";
import SearchStock from "./components/Search/SearchStock";

function App() {
  return (
    <div>
      <SearchStock/>
      <Dashboard/>
      <B3/>
    </div>
  );
}

export default App;
