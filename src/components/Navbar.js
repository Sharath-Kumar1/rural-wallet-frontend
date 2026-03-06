import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

return(

<div style={nav}>

{/* Left side */}

<div style={left}>

<span style={{fontSize:"32px"}}>🏦</span>

<h3 style={{marginLeft:"10px"}}>Rural Wallet</h3>

</div>


{/* Right side */}

<div style={right}>

<Link style={link} to="/">Home</Link>

<Link style={link} to="/about">About</Link>

<Link style={link} to="/register">Register</Link>

<Link style={link} to="/login">Login</Link>

</div>

</div>

);

}


/* STYLES */

const nav={
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"15px 40px",
background:"#0b3d91",
color:"white"
};

const left={
display:"flex",
alignItems:"center"
};

const right={
display:"flex",
gap:"25px"
};

const link={
color:"white",
textDecoration:"none",
fontSize:"16px"
};