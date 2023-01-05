const express=require("express")
const userRouter=require("../routes/user.route")
const quizRouter=require("../routes/quiz.route")
const app=express()
app.use(express.json())
app.use("/users",userRouter)
app.use("/quiz",quizRouter)

module.exports=app