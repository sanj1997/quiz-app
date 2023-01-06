<template>
    <CFlex w="50%" m="auto" mt="150px" flexDirection="column" gap="20px">
         <CImage w="100%" src="https://static.vecteezy.com/system/resources/previews/003/206/208/original/quiz-time-neon-signs-style-text-free-vector.jpg"/>
         <nuxt-link v-if="$store.state.token" to="/quiz"><CButton w="100%">Create your Quiz</CButton></nuxt-link>
         <nuxt-link v-else to="/registration/signin"><CButton w="100%">Create your Quiz</CButton></nuxt-link>
    </CFlex>
</template>
<script>
  import {CFlex,CImage,CButton} from "@chakra-ui/vue"

  export default{
    components:{
        CImage,CFlex,CButton
    },
    mounted() {
      const token=JSON.parse(localStorage.getItem("accessToken"))||""
      const name=JSON.parse(localStorage.getItem("name"))||""
      this.$store.commit("LOGIN_USER",{token,name})
    }
  }
</script>