import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../api";

export default function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();

const login = async()=>{

try{

const res = await API.post("/auth/login",{email,password});

localStorage.setItem("token",res.data.token);
localStorage.setItem("userId",res.data.userId);

navigate("/dashboard");

}
catch(err){

alert(err.response?.data || "Login failed");

}

};

return(

<div style={page}>

<div style={card}>

<h2>Login</h2>

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

<button style={btn} onClick={login}>
Login
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
backgroundSize:"cover"
};

const card={
background:"white",
padding:"40px",
borderRadius:"10px",
width:"300px"
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