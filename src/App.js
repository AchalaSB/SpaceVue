import React, { useState } from 'react';
import Chart from "./components/chart";
import Grid from "./components/grid";
import Home from "./components/home";
import Login from "./components/login";
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        )}
        <Route path="/chart" element={<Chart />} />
        <Route path="/grid" element={<Grid />} />

      </Routes>
    </BrowserRouter>
  );
}


export default App;
