
import express from "express"
const app=express()
import cors from 'cors'
import data from './data.js'
import mongoose from "mongoose"
app.use(cors({ origin: "http://localhost:3000" }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin,X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Method", "GET,PUT,POST,DELETE");
    next();
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const productschema=new mongoose.Schema({
    name:String,
    category:String,
    image:String,
    price:String,
    description:String
})
const Product=mongoose.model('Product',productschema)

// saving product in mongodb form the New product page
// api 
app.post('/uploadproduct',async (req,res)=>{
    console.log(req.body)
    const data=new Product(req.body)
    await data.save()
    res.send({message:'uploaded successfully'})
 



})

app.get('/api/products/:id',(req,res)=>{
    const product=data.products.find((product)=>product._id===req.params.id)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'product not found'})
    }
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
