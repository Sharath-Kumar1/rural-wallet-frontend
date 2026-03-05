
import React,{useState} from "react";
import {useParams,useNavigate} from "react-router-dom";
import API from "../api";

export default function QRDeposit(){

const {userId} = useParams();
const navigate = useNavigate();
const [amount,setAmount] = useState("");

const token = localStorage.getItem("token");

const handleDeposit = async ()=>{

if(!token){
alert("Login first");
navigate("/login");
return;
}

try{

const res = await API.post("/wallet/transaction",
{
type:"deposit",
amount:Number(amount),
pin:"0000"
});

alert("Deposit Successful ₹"+res.data.balance);

navigate("/dashboard");

}

catch(err){
alert(err.response?.data || "Deposit failed");
}

};

return(

<div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>

<div style={{background:"white",padding:"40px",borderRadius:"10px"}}>

<h2>QR Deposit</h2>

<p>Account: {userId}</p>

<input type="number" placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
style={{width:"100%",padding:"10px",marginTop:"10px"}}/>

<button onClick={handleDeposit}
style={{marginTop:"20px",width:"100%",padding:"12px",background:"#28a745",color:"white"}}>
Deposit
</button>

</div>

</div>

);

}

