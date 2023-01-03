<template>
   <div class="nav">
        <NuxtLink to="/"><p>Quizz</p></NuxtLink>
        <div v-if="user!=null">
            <h2>{{ user }}</h2>
            <button @click="handleSignOut()">Sign Out</button>
        </div>
        <div v-else>
            <NuxtLink to="/account/signup"><button>Sign up</button></NuxtLink>
            <NuxtLink to="/account/signin"><button>Sign in</button></NuxtLink>
        </div>
   </div>
</template>

<script setup>
import {ref,onMounted,onUpdated} from "vue"
 let user=ref("")
 onMounted
 onMounted(()=>{
    user.value=JSON.parse(localStorage.getItem("name"))||null
 })

 const handleSignOut=()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("token")
    window.location.reload()
 }

</script>

<style scoped>
.nav{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1rem;
    height: 100px;
    background-color: #70f4b5;
    align-items: center;
}
.nav p{
    font-weight: 800;
    font-size: 50px;
    text-decoration: none;
    background-color: #70f4b5;
}
.nav div{
    display: flex;
    width: 20%;
    justify-content: space-between;
    align-items: center;
    background-color: #70f4b5;
}
.nav button{
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    background-color: white;
}
</style>