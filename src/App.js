import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Components/Details';
import Login from './Components/Login';



function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path='details' element={<Details />}/>
        

      </Routes>
    </div>
    </Router>
  );
}

export default App;
