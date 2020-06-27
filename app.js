import express from 'express';
import data from './data'
import cors from 'cors'
 const app = express()
app.use(cors())
 app.get('/products/items',(req,res)=>{
     console.log(`req`,req.body)
     res.send(data)
 })
 app.get('/products/details/:id',(req,res)=>{
     console.log('res',req.params)
     const product = data.products.find((i)=>i.id===req.params.id)
     console.log(product)
     if(product){
         res.send(product)
     }else{
         res.status(404).send({message:"product doest not exist"})
     }
 })
app.listen(5000,()=>console.log(`server startd`))