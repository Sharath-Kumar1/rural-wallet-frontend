import React from "react";

export default function Home(){

return(

<div style={page}>

<h1 style={{color:"white"}}>Welcome to Rural Wallet</h1>

<p style={{color:"white",fontSize:"18px"}}>
Digital banking solution for rural communities.
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