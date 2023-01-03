<template>
    <navbarVue/>
    <div class="container">
     <p>Register</p>
     <form @submit.prevent="handleSubmit()">
        <input v-model="form.name" required="true" type="text" placeholder="Enter name">
        <input v-model="form.email" required="true" type="text" placeholder="Enter email">
        <input v-model="form.password" required="true" type="password" placeholder="Enter password">
        <button type="submit">Submit</button>
     </form>
    </div>
 </template>
 <script setup>
 import navbarVue from '~~/components/navbar.vue';
 import axios from "axios"
 import {reactive} from "vue"
 let form=reactive(
    {name:"",email:"",password:""}
)

 const handleSubmit=async()=>{
   try{
    const res=await axios.post("/api/users/signup",form).then((res)=>{
        alert(res.data.message)
        setTimeout(()=>{
            navigateTo("/account/signin")
        },2000)
    })
   }catch(e){
     alert(e.message)
   }
 }


 </script>
 <style scoped>
 .container{
     width: 50%;
     margin: auto;
     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
     margin-top: 50px;
     text-align: center;
     padding: 3rem;
     
 }
 .container>p{
     font-weight: 800;
     font-size: 3rem;
 }
 
 form{
     display: flex;
     flex-direction: column;
     gap: 20px;
     margin: auto;
     margin-top: 3rem;
     width: 30%;
 }
 
 input{
     padding: 0.5rem;
     
 }
 
 button{
     padding: 0.2rem;
     cursor: pointer;
 }
 </style>