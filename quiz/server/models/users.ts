import {Schema,model} from "mongoose"

const UserSchema=new Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String}
})

export const UserModel=model("user",UserSchema)
