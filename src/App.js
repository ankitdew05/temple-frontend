import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import Detail1 from "./Components/Detail1";
import Detail2 from "./Components/Detail2";

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id/:title/:state" element={<Detail />} />
        <Route path="/detail1/:id/:title/:state" element={<Detail1 />} />
        <Route path="/detail2/:id/:title/:state" element={<Detail2 />} />
     
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
