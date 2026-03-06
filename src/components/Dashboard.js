import React,{useEffect,useState} from "react";
import API from "../api";

export default function Dashboard(){

const [balance,setBalance] = useState(0);
const [amount,setAmount] = useState("");
const [pin,setPin] = useState("");
const [history,setHistory] = useState([]);
const [receipt,setReceipt] = useState(null);

const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");

const headers = {headers:{Authorization:token}};

useEffect(()=>{
loadBalance();
loadHistory();
},[]);


/* LOAD BALANCE */

const loadBalance = async()=>{

try{

const res = await API.get(`/wallet/balance/${userId}`,headers);
setBalance(res.data.balance);

}
catch{
console.log("Balance error");
}

};


/* LOAD HISTORY */

const loadHistory = async()=>{

try{

const res = await API.get(`/wallet/history/${userId}`,headers);
setHistory(res.data);

}
catch{
console.log("History error");
}

};


/* DEPOSIT */

const deposit = async()=>{

try{

await API.post(
"/wallet/transaction",
{
userId,
type:"deposit",
amount:Number(amount),
pin
},
headers
);

alert("Deposit Successful");

setAmount("");
setPin("");

loadBalance();
loadHistory();

}
catch(err){

alert(err.response?.data || "Transaction Failed");

}

};


/* VIEW RECEIPT */

const viewReceipt=(txn)=>{

const text=`
RURAL WALLET RECEIPT

User ID : ${userId}

Transaction : ${txn.type}

Amount : ₹${txn.amount}

Date : ${new Date(txn.date).toLocaleString()}
`;

setReceipt(text);

};


/* DOWNLOAD RECEIPT */

const downloadReceipt=()=>{

const blob=new Blob([receipt],{type:"text/plain"});
const link=document.createElement("a");

link.href=URL.createObjectURL(blob);
link.download="receipt.txt";
link.click();

};


return(

<div style={page}>

{/* HEADER */}

<div style={header}>

<span style={{fontSize:"40px"}}>🏦</span>

<h2>Rural Wallet Dashboard</h2>

</div>


{/* USER ID + BALANCE + DEPOSIT */}

<div style={topContainer}>


{/* USER ID */}

<div style={card}>

<h3>User ID</h3>

<p style={{fontSize:"18px"}}>{userId}</p>

</div>


{/* BALANCE */}

<div style={card}>

<h3>Balance</h3>

<h2>₹{balance}</h2>

</div>


{/* DEPOSIT */}

<div style={depositBox}>

<h3>Deposit Money</h3>

<input
placeholder="Enter Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
style={input}
/>

<input
type="password"
placeholder="Enter PIN"
value={pin}
onChange={(e)=>setPin(e.target.value)}
style={input}
/>

<button style={btn} onClick={deposit}>
Deposit
</button>

</div>

</div>


{/* HISTORY */}

<h3 style={{marginTop:"40px"}}>Transaction History</h3>

<table style={table}>

<thead>

<tr>

<th>Type</th>
<th>Amount</th>
<th>Date</th>
<th>Receipt</th>

</tr>

</thead>

<tbody>

{history.map((txn,i)=>(

<tr key={i}>

<td>{txn.type}</td>

<td>₹{txn.amount}</td>

<td>{new Date(txn.date).toLocaleString()}</td>

<td>

<button style={viewBtn} onClick={()=>viewReceipt(txn)}>
View
</button>

</td>

</tr>

))}

</tbody>

</table>


{/* RECEIPT POPUP */}

{receipt && (

<div style={popupBg}>

<div style={popupBox}>

<h3>Transaction Receipt</h3>

<pre>{receipt}</pre>

<button style={downloadBtn} onClick={downloadReceipt}>
Download
</button>

<button style={closeBtn} onClick={()=>setReceipt(null)}>
Close
</button>

</div>

</div>

)}

</div>

);

}


/* STYLES */

const page={
padding:"40px",
background:"#eef3f9",
minHeight:"100vh",
textAlign:"center"
};

const header={
display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"10px",
marginBottom:"30px"
};

const topContainer={
display:"flex",
justifyContent:"center",
gap:"30px",
flexWrap:"wrap"
};

const card={
background:"white",
padding:"25px",
borderRadius:"10px",
width:"200px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
};

const depositBox={
background:"white",
padding:"25px",
borderRadius:"10px",
width:"300px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
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
border:"none",
cursor:"pointer"
};

const table={
width:"100%",
marginTop:"20px",
background:"white",
borderCollapse:"collapse"
};

const viewBtn={
padding:"6px 12px",
background:"#28a745",
color:"white",
border:"none",
cursor:"pointer"
};

const popupBg={
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.6)",
display:"flex",
justifyContent:"center",
alignItems:"center"
};

const popupBox={
background:"white",
padding:"30px",
borderRadius:"10px",
width:"350px"
};

const downloadBtn={
padding:"8px 15px",
background:"#0b3d91",
color:"white",
border:"none",
cursor:"pointer",
marginRight:"10px"
};

const closeBtn={
padding:"8px 15px",
background:"red",
color:"white",
border:"none",
cursor:"pointer"
};