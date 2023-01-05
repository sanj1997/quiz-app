<template>
<CBox>
    <AppNavbarVue/>
    <QuizDetailsVue/>
</CBox>
</template>
<script lang="js">

import {CBox} from "@chakra-ui/vue"
import AppNavbarVue from "../../components/AppNavbar..vue";
import QuizDetailsVue from "../../components/QuizDetails.vue";
export default{
    components:{
        CBox,AppNavbarVue,QuizDetailsVue
    }
}
</script>