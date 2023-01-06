<template>
    <CBox>
      <AppNavbar/>
      <CBox w="50%" m="auto">
        <!-- <DefaultViewVue/> -->
        <CFlex w="50%" m="auto" mt="150px" flexDirection="column" gap="20px">
         <CImage w="100%" src="https://static.vecteezy.com/system/resources/previews/003/206/208/original/quiz-time-neon-signs-style-text-free-vector.jpg"/>
         <nuxt-link v-if="$store.state.token" to="/quiz"><CButton w="100%">Create your Quiz</CButton></nuxt-link>
         <nuxt-link v-else to="/registration/signin"><CButton w="100%">Create your Quiz</CButton></nuxt-link>
       </CFlex>
      </CBox>
    </CBox>
</template>

<script>
import {CBox,CFlex,CImage,CButton} from "@chakra-ui/vue"
import AppNavbar from "../components/AppNavbar..vue"
// import DefaultViewVue from "~/components/DefaultView.vue";
export default{
  components:{
    AppNavbar,CBox,CFlex,CImage,CButton
  }
}

</script>
