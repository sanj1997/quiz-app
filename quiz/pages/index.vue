<template>
    <CBox>
      <AppNavbar/>
      <CBox w="50%" m="auto">
        <DefaultViewVue/>
      </CBox>
    </CBox>
</template>

<script>
import {CBox} from "@chakra-ui/vue"
import AppNavbar from "../components/AppNavbar..vue"
import DefaultViewVue from "~/components/DefaultView.vue";
export default{
  components:{
    AppNavbar,CBox,DefaultViewVue
  }
}

</script>
