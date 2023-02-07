import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import Login from "./Components/Login";
import Disney from "./Components/Disney.jsx";
import Marvel from "./Components/Marvel";
import NationalGeo from "./Components/NationalGeo";
import Pixar from "./Components/Pixar";
import StarWars from "./Components/StarWars";
import All from "./Components/All";
import Original from "./Components/Original";
import Series from "./Components/Series";
import Watchlist from "./Components/Watchlist";
import Search from "./Components/Search";

function App() {
 
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/details/:id"
            element={<Details/>}
          />
          <Route path="/disney" element={<Disney />} />
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/nationalgeo" element={<NationalGeo />} />
          <Route path="/pixar" element={<Pixar />} />
          <Route path="/starwars" element={<StarWars />} />
          <Route path="/all" element={<All />} />
          <Route path="/originals" element={<Original />} />
          <Route path="/series" element={<Series />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
