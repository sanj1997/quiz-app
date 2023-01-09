<template>
    <CBox mt="80px">
        <AppNavbarVue />
        <CFlex w="30%" m="auto" p="20px" flexDirection="column" gap="15px">
            <CText textAlign="center" fontWeight="700" fontSize="2xl">Login</CText>
            <form @submit.prevent="handleSignUp()">
                <CFormControl  display="flex" flexDirection="column">
                <CFormLabel mt="15px">Email address</CFormLabel>
                <CInput v-model="email" required="true"  type="email" placeholder="Enter email" />
                <CFormLabel mt="15px">Password</CFormLabel>
                <CInput v-model="password" required="true"  type="password" placeholder="Enter password" />
                <CButton mt="20px" type="submit">Submit</CButton>
            </CFormControl>
            </form>
        </CFlex>
    </CBox>
</template>
<script>


import { CInput, CButton, CBox,CText, CFlex, CFormControl, CFormLabel,useToast } from "@chakra-ui/vue"

import AppNavbarVue from '../../components/AppNavbar..vue';
const toast=useToast()
export default {
    created(){
       console.log(this.$route)
    },
    data(){
        return {
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
                    email:this.email,
                    password:this.password
                }
                this.email=""
                this.password=""
                await fetch("/api/users/signin",{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "Content-Type":"application/json"
                }
               }).then(async(res)=>{
                    const response= await res.json()
                    if(response.message==="Login Successful")
                    {
                        toast({
                        description:response.message,
                        status:"success",
                        isClosable:false,
                        duration:2000
                        })
                        localStorage.setItem("accessToken",JSON.stringify(response.accessToken))
                        localStorage.setItem("name",JSON.stringify(response.name))
                        this.$store.commit("LOGIN_USER",{token:response.accessToken,name:response.name})
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
            //     toast({
            //      description:e.response.data.message,
            //      status:"error",
            //      isClosable:false,
            //      duration:2000
            //    })
            }
            
        }
    }
}
</script>