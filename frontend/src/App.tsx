import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import Login from "./components/Login";
import ValuationProcess from "./components/ValuationProcess";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/valuation" element={<ValuationProcess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
