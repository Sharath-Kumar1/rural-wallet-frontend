import React,{useState} from "react";
import axios from "axios";

export default function ATM(){

const [userId,setUserId] = useState("");
const [pin,setPin] = useState("");
const [amount,setAmount] = useState("");
const [type,setType] = useState("withdraw");

const handleTransaction = async()=>{

try{

const res = await axios.post(
"http://YOUR_MAIN_LAPTOP_IP:5000/api/wallet/atm-transaction",
{
userId,
pin,
amount,
type
}
);

alert(
"Transaction Successful\nBalance: ₹"+res.data.balance
);

}
catch(err){

alert(err.response?.data || "Transaction Failed");

}

};

return(

<div style={screen}>

<div style={atmBox}>

<h2>Rural ATM</h2>

<input
placeholder="User ID"
value={userId}
onChange={(e)=>setUserId(e.target.value)}
style={input}
/>

<input
type="password"
placeholder="PIN"
value={pin}
onChange={(e)=>setPin(e.target.value)}
style={input}
/>

<input
type="number"
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
style={input}
/>

<select
value={type}
onChange={(e)=>setType(e.target.value)}
style={input}
>

<option value="withdraw">Withdraw</option>
<option value="deposit">Deposit</option>

</select>

<button style={btn} onClick={handleTransaction}>
Process Transaction
</button>

</div>

</div>

);

}


/* STYLES */

const screen={
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#002b5c",
color:"white"
};

const atmBox={
background:"white",
color:"black",
padding:"40px",
borderRadius:"10px",
textAlign:"center",
width:"350px"
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
background:"#28a745",
color:"white",
border:"none",
cursor:"pointer"
};