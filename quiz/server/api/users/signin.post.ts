import { UserModel } from "~~/server/models/users"

export default defineEventHandler(async(event)=>{
    const body=await readBody(event)
    const config=useRuntimeConfig()
    const {email,password}=body
    try{
       const validateUser=await UserModel.findOne({email:email,password:password})
       if(validateUser)
       {
          return {
            message:"Login successful",
            status:"success",
            name:validateUser.name,
            token:`${email}:${validateUser._id}:${validateUser.name}`
          }
       }
       return {
        message:"Invalid credentials",
        status:"error"
       }
    }catch(e:any){
        return {
            message:e.message,
            status:"error"
        }
    }
})