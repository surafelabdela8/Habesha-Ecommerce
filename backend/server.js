
import express from "express"
const app=express()
import cors from 'cors'
import data from './data.js'
app.use(cors({ origin: "http://localhost:3000" }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin,X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Method", "GET,PUT,POST,DELETE");
    next();
})


app.get('/api/products',(req,res)=>{
    res.send(data.products)
})
app.get('/',(req,res)=>{
    res.send('the hipe is real ')
})
const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})
