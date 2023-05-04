
import express from "express"
import cors from 'cors'
import mongoose from "mongoose"
import userRouter from "./routers/userRouter.js"
import productRouter from "./routers/productRouter.js"

//backend config
mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/HABESHA-ECOMMERCE',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log('connected to database')
})
.catch(err=>{
    console.log('failed to connect',err)
})


const app=express() 
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//setuping cors or cor configuration 
app.use(cors({ origin: "http://localhost:3000" }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin,X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Method", "GET,PUT,POST,DELETE");
    next();
})


app.use('/api/users',userRouter)
app.use('/api/products',productRouter)




// app.get('/api/products/:id',(req,res)=>{
//     const product=data.products.find((product)=>product._id===req.params.id)
//     if(product){
//         res.send(product)
//     }else{
//         res.status(404).send({message:'product not found'})
//     }
// })
// app.get('/api/products',(req,res)=>{
//     res.send(data.products)
// })

app.get('/',(req,res)=>{
    res.send('the hipe is real ')
})


// app.post('/uploadproduct',async(req,res)=>{
//     const productupload=new Product(req.body)
//     await productupload.save()
//     res.send({message:'successfully uploaded'})
// })

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})
