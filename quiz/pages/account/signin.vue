<template>
   <navbarVue/>
   <div class="container">
    <p>Login</p>
    <form @submit.prevent="handleSubmit()">
       <input v-model="form.email" required="true" type="text" placeholder="Enter email">
       <input v-model="form.password" required="true" type="password" placeholder="Enter password">
       <button type="submit">Submit</button>
    </form>
   </div>
</template>
<script setup>
import navbarVue from '~~/components/navbar.vue';
import {reactive} from "vue"
import axios from "axios"
let form=reactive({
    email:"",
    password:""
})

const handleSubmit=async()=>{
    try{
        const res=await axios.post("/api/users/signin",form)
        alert("Login successful")
        localStorage.setItem("name",JSON.stringify(res.data.name))
        localStorage.setItem("token",JSON.stringify(res.data.token))
        navigateTo("/")
    }catch(e){
        console.log(e) 
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