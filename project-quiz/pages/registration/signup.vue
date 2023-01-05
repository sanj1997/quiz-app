<template>
    <CBox mt="80px">
        <AppNavbarVue />
        <CFlex w="30%" m="auto" p="20px" flexDirection="column" gap="15px">
            <CText textAlign="center" fontWeight="700" fontSize="2xl">Register</CText>
            <form @submit.prevent="handleSignUp()">
                <CFormControl  display="flex" flexDirection="column">
                <CFormLabel mt="15px">Name</CFormLabel >
                <CInput v-model="name" required="true"  type="text" placeholder="Enter name" />
                <CFormLabel mt="15px">Email address</CFormLabel>
                <CInput v-model="email" required="true"  type="email" placeholder="Enter email" />
                <CFormLabel mt="15px">Password</CFormLabel>
                <CInput v-model="password"  required="true"  type="password" placeholder="Enter password" />
                <CButton mt="20px" type="submit">Submit</CButton>
            </CFormControl>
            </form>
            <nuxt-link to="/registration/signin"><CText noOfLines=2 fontWeight="500" textAlign="center" fontSize="xs" textDecoration="underline">Already registered? Click here to login</CText></nuxt-link>
        </CFlex>
    </CBox>

</template>
<script lang="js">


import { CInput, CButton, CBox,CText, CFlex, CFormControl, CFormLabel,useToast } from "@chakra-ui/vue"

import AppNavbarVue from '../../components/AppNavbar..vue';

const toast=useToast()
export default {
    data(){
        return {
            name:"",
            email:"",
            password:""
        }
    },
    components: {
        AppNavbarVue, CInput, CButton, CBox,CText,CFlex, CFormControl, CFormLabel
    },
    methods:{
        async handleSignUp(){
            
            try{
                const payload={
                    name:this.name,
                    email:this.email,
                    password:this.password
                }
                this.name=""
                this.email=""
                this.password=""
                await fetch("/api/users/signup",{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "content-Type":"application/json"
                }
               }).then(async(res)=>{
                    const response=await res.json()
                    if(response.message==="Account created successfully")
                    {
                        toast({
                            description:response.message,
                            status:"success",
                            isClosable:false,
                            duration:2000
                        })
                    }
                    else
                    {
                        toast({
                            description:response.message,
                            status:"error",
                            isClosable:false,
                            duration:2000
                        })
                    }
                    
               })
               
            }catch(e){
                console.log(e)
                toast({
                 description:e.response.data.message,
                 status:"error",
                 isClosable:false,
                 duration:2000
               })
            }
            
        }
    }
}
</script>