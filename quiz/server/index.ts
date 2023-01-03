import mongoose from "mongoose"
import {Nitro} from "nitropack"
export default async(_nitroApp:Nitro)=>{
   const config=useRuntimeConfig()
   mongoose.set("strictQuery",true)
   try{
      await mongoose.connect(config.mongodbUrl)
      console.log("connected to mongoDB database")
   }catch(e){
     console.log(e)
   }
}