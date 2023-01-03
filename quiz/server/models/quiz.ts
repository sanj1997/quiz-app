import {Schema,model} from "mongoose"

const QuizSchema=new Schema({
    title:{type:String},
    createdBy:{type:Schema.Types.ObjectId,ref:"user",required:true},
    questions:{type:Array,required:true}
})

export const QuizModel=model("question",QuizSchema)