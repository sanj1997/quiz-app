const express=require("express")
const route=express.Router()
const jwt=require("jsonwebtoken")
const QuizModel = require("../models/quiz.model")
route.post("/add-quiz",async(req,res)=>{
    const {title,data}=req.body
    const token=req.headers.authorization
    if(!token)
    {
        return res.status(401).send({message:"Unauthorised"})
    }
    try{
        const UserData=jwt.verify(token,"sanjay1997")
        const userId=UserData.id
        const newQuiz=await QuizModel.create({title:title,data:data,createdBy:userId})
        return res.send({message:"Quiz added successfully"})
    }catch(e){
        return res.status(401).send({message:e.message})
    }
})

route.get("/",async(req,res)=>{
    const token=req.headers.authorization
    if(!token)
    {
        return res.status(401).send({message:"Unauthorised"})
    }
    try{
        const UserData=jwt.verify(token,"sanjay1997")
        const userId=UserData.id
        const quizData=await QuizModel.find({createdBy:userId})
        return res.send({message:"Successful",data:quizData})
    }catch(e){
        return res.status(401).send({message:e.message})
    }
})

route.delete("/:id",async(req,res)=>{
    const token=req.headers.authorization
    const {id}=req.params
    if(!token)
    {
        return res.status(401).send({message:"Unauthorised"})
    }
    try{
        const UserData=jwt.verify(token,"sanjay1997")
        const userId=UserData.id
        await QuizModel.deleteOne({_id:id})
        return res.send({message:"Successful"})
    }catch(e){
        return res.status(401).send({message:e.message})
    }
})
module.exports=route