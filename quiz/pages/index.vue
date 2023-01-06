<template>
    <CBox>
      <AppNavbar/>
      <CBox w="50%" m="auto">
        <DefaultView/>
      </CBox>
    </CBox>
</template>

<script>
import {CBox} from "@chakra-ui/vue"
import AppNavbar from "../components/AppNavbar..vue"
import DefaultView from "../components/DefaultView.vue";
export default{
  components:{
    AppNavbar,CBox,DefaultView
  }
}

</script>
