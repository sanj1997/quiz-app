const {Schema,model} =require("mongoose")

const QuizSchema=new Schema({
    title:{type:String,required:true},
    data:{type:Array,required:true},
    createdBy:{type:Schema.Types.ObjectId,ref:"user",required:true}
})

const QuizModel=model("quize",QuizSchema)
module.exports=QuizModel