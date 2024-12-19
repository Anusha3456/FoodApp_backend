const express= require('express');
const dotEnv= require('dotenv');
const mongoose= require ('mongoose');
const vendorRoutes=require('./Routes/vendorRoutes')
const bodyParser=require('body-parser')
const firmRoutes=require('./Routes/firmRoutes')
const productRoutes=require('./Routes/productRoutes')
const cors = require('cors')
const path=require('path')

const app=express()

const PORT= 4000
dotEnv.config();
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB connected successfully'))
.catch((error)=>console.log(error))

app.use( bodyParser.json())
app.use('/vendor',vendorRoutes)
app.use('/firm',firmRoutes)
app.use('/product',productRoutes)
app.use('uploads',express.static('uploads'))

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})

app.use('/home',(req,res)=>{
    res.send("welcome to tasty foods")
})