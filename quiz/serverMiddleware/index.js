const mongoose=require("mongoose")
mongoose.set("strictQuery",true)
export default async function(req,res,next){
    try{
        await mongoose.connect("mongodb+srv://s:sanjay1997@cluster0.qnkuqjj.mongodb.net/quiz").then(()=>{
            next()
        }).catch((e)=>{
            console.log(e.message)
        })
        
        
    }catch(e){
         console.log("database connection failed")
    }
}