import { UserModel } from "~~/server/models/users";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, password } = body;
  try {
    const isExisting = await UserModel.findOne({ email: email });
    if (isExisting) {
      return{
        message: "Account already exists",
        status: "error",
      };
    } else {
      const newUser=await UserModel.create({name,email,password})  
      return {
        message: "Account created successfully",
        status: "success",
      };
    }
  } catch (e: any) {
    return {
      message: e.message,
      status: "error",
    };
  }
});
