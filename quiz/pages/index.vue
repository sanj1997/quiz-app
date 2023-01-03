<template>
  <div>
    <div>
      <navbarVue/>
    </div>
    <div class="body">
      <defaultVue/>
    </div>
  </div>
</template>
<script setup>
import navbarVue from '~~/components/navbar.vue';
import defaultVue from '~~/components/defaultView.vue';
</script>
<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

</style>