const express = require('express');
const mongoose = require('mongoose');

const userModel=require('./schema')

const jwt = require('jsonwebtoken');
// const { appendFile } = require('fs');



const app =express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/codeengine',()=>{
    console.log('connected to DB')
}),
    (err)=>console.log(err)


    app.listen(process.env.PORT || 3003,(err)=>{
        if(!err){
            console.log('server started at 3003')
        }
      })




      app.post("/adding",(req,res)=>{
        console.log(req.body)
        userModel.create({  country:req.body.country,
            
     })
    .then((data)=>{
     res.status(200).send(data)
    }).catch((err)=>{
    console.log(err)
    })      
    
    

    })



    app.get("/posts/:country",(req,res)=>{
        userModel.find({find:req.params.country}).then((data)=>{
            res.status(200).send(data)
            
        }).catch((err)=>{
            res.status(400).send(err)
        })
    })
    