import React from "react";
import './App.css'
import Dashboard from "./components/Dashboard/Dashboard";
import SearchStock from "./components/Search/SearchStock";

function App() {
  return (
    <div>
      <SearchStock/>
      <Dashboard/>
    </div>
  );
}

export default App;
