<template>
    <CFlex h="80px" justify-Content="space-between" align-Items="center" bg="teal" p="10px" position="fixed" w="100%" top="0px" z-index="3">
         <nuxt-link to="/"><CImage border-Radius="100%" width="50px" src="https://img.freepik.com/premium-vector/quiz-logo-isolate-white-questionnaire-icon-poll-sign-flat-bubble-speech-symbol_185004-212.jpg?w=2000"></CImage></nuxt-link>
         
         <CFlex v-if="$store.state.name&&$store.state.token"  w="40%" justify-Content="space-between">
          <nuxt-link v-if="$store.state.token" to="/quiz/myquiz"><CButton>My Quiz Collection</CButton></nuxt-link>
             <nuxt-link to="/registration/signin"><CButton>{{$store.state.name}}</CButton></nuxt-link>
             <nuxt-link to="/registration/signup"><CButton @click="handleLogout()">SignOut</CButton></nuxt-link>
         </CFlex>
         <CFlex v-else w="20%" justify-Content="space-between">
             <nuxt-link to="/registration/signin"><CButton>SignIn</CButton></nuxt-link>
             <nuxt-link to="/registration/signup"><CButton>SignUp</CButton></nuxt-link>
         </CFlex>
    </CFlex>
</template>
<script lang="js">
  import {CFlex,CImage,CButton} from "@chakra-ui/vue"
  export default{
    components:{
    CFlex,
    CImage,
    CButton
},
    methods:{
      handleLogout(){
        localStorage.removeItem("accessToken")
        localStorage.removeItem("name")
        this.$store.commit("LOGIN_USER",{token:"",name:""})
      }
    }
  }
</script>