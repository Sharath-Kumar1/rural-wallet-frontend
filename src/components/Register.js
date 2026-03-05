import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../api";

export default function Register(){

const navigate = useNavigate();

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [pin,setPin]=useState("");

const register = async()=>{

try{

await API.post("/auth/register",{name,email,password,pin});

alert("Account Created Successfully");

navigate("/login");

}
catch(err){

alert(err.response?.data || "Register Failed");

}

};

return(

<div style={page}>

<div style={card}>

<h2>Create Account</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
style={input}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
style={input}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
style={input}
/>

<input
type="password"
placeholder="PIN"
onChange={(e)=>setPin(e.target.value)}
style={input}
/>

<button style={btn} onClick={register}>
Register
</button>

</div>

</div>

);

}

const page={
height:"90vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
backgroundImage:"url(https://images.unsplash.com/photo-1601597111158-2fceff292cdc)",
backgroundSize:"cover",
backgroundPosition:"center"
};

const card={
background:"rgba(255,255,255,0.95)",
padding:"40px",
borderRadius:"10px",
width:"320px"
};

const input={
width:"100%",
padding:"10px",
marginTop:"10px"
};

const btn={
marginTop:"15px",
padding:"10px",
width:"100%",
background:"#0b3d91",
color:"white",
border:"none"
};