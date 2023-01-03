<template>
    <navbarVue/>
    <div class="body">
       <div class="left">
           <form>
              <input type="text" placeholder="Enter quiz title">
              <label for="questions">Select no.of questions
                <select name="questions" id="">
                    <option value="">---Select---</option>
                    <option value="5">5</option>
                    <option value="7">7</option>
                    <option value="10">10</option>
                </select>
              </label>
           </form>
       </div>
       <div class="right">
         
       </div>
    </div>
</template>
<script setup>
import navbarVue from '~~/components/navbar.vue';
</script>
<style scoped>
.body{
    display: flex;
    border: 1px solid red;
    justify-content: space-between;
    padding: 2rem;
}
.left{
    border: 1px solid teal;
    
}
.left>form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
}
.right{
    border: 1px solid teal;
}
</style>