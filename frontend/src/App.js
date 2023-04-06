// import logo from './logo.svg';
import "./App.css";
import "./Components/Header";
import Landingpage from "./Components/Landingpage";
import Videopage from "./Components/Videopage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";


function App() {

const [vids,setvids] = useState()

  return (
    <div className="App">
    <Routes>
      <Route path="/Video/:id" element={<Videopage vids={vids} />} />
      <Route path="/" element={<Landingpage  setvids={setvids}/>}/>
    </Routes>
    </div>
  );
}

export default App;
