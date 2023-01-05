const express=require("express")
const UserModel = require("../models/user.model")
const route=express.Router()
const jwt=require("jsonwebtoken")
route.post("/signup",async(req,res)=>{
   const {name,email,password}=req.body
   try{
    const isExisting=await UserModel.findOne({email:email})
    if(isExisting)
    {
       return res.status(401).send({message:"Account already exists"})
    }
    else
    {
        const newUser=await UserModel.create({name,email,password})
        return res.send({message:"Account created successfully"})
    }
   }catch(e){
     return res.status(401).send({message:e.message})
   }
})

route.post("/signin",async(req,res)=>{
    const {email,password}=req.body
    try{
     const isExisting=await UserModel.findOne({email:email,password:password})
     if(!isExisting)
     {
        return res.status(401).send({message:"Invalid credentials"})
     }
     else
     {
         const accessToken=jwt.sign({id:isExisting._id},"sanjay1997",{
            expiresIn:"60 days"
         })
         return res.send({message:"Login Successful",accessToken:accessToken,name:isExisting.name})
     }
    }catch(e){
      return res.status(401).send({message:e.message})
    }
 })

module.exports=route