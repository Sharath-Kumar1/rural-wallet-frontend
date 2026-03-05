import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/about" element={<About/>}/>

<Route path="/register" element={<Register/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;