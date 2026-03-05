
import React from "react";

export default function About(){

return(

<div style={page}>

<h2 style={{color:"white"}}>About Rural Wallet</h2>

<p style={{color:"white",maxWidth:"600px",textAlign:"center"}}>

Rural Wallet is a MERN stack banking system designed for rural areas.
Users can create accounts, deposit money and withdraw using ATM machines
even when internet connectivity is limited.

</p>

</div>

);

}

const page={
height:"90vh",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
backgroundImage:"url(https://images.unsplash.com/photo-1601597111158-2fceff292cdc)",
backgroundSize:"cover",
backgroundPosition:"center"
};