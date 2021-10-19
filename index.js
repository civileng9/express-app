const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.get('/',(req,res)=>{
	res.sendfile("index.html");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`first express app started on http://localhost:${PORT}`));
