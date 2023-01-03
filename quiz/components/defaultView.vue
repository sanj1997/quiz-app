<template>
   <div class="container">
       <img src="https://img.freepik.com/premium-vector/comic-speech-bubbles-with-text-quiz-night-neon-icon-symbol-sticker-tag-special-offer-label_100456-7641.jpg?w=2000" alt="Error">
       <button @click="handleRoute()">Create quiz</button>
   </div>
</template>

<script setup>
import {ref,onMounted} from "vue"
const user=ref("")

onMounted(()=>{
    user.value=JSON.parse(localStorage.getItem("name"))||null
})


const handleRoute=()=>{
    user.value? navigateTo("/quiz/create"):navigateTo("/account/signin")
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    margin-top: 50px;
    gap: 20px;
}
.container>img{
    width: 50%;
    margin: auto;
}
.container>button{
    width: 20%;
    margin: auto;
    padding: 1rem;
    cursor: pointer;
}
</style>