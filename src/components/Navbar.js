import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar(){

return(

<div style={nav}>

<div style={{display:"flex",alignItems:"center"}}>

<img src={logo} alt="logo" style={{height:"45px"}}/>

<h3 style={{marginLeft:"10px"}}>Rural Wallet</h3>

</div>

<div>

<Link style={link} to="/">Home</Link>
<Link style={link} to="/about">About</Link>
<Link style={link} to="/register">Register</Link>
<Link style={link} to="/login">Login</Link>

</div>

</div>

);

}

const nav={
display:"flex",
justifyContent:"space-between",
padding:"12px 40px",
background:"#0b3d91",
color:"white"
};

const link={
color:"white",
margin:"0 10px",
textDecoration:"none",
fontWeight:"bold"
};