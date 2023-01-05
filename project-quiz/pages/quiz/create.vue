<template>
    <CBox>
        <AppNavbarVue />
        <AddQuestionsVue />
    </CBox>
</template>
<script lang="js">

import { CBox } from "@chakra-ui/vue"
import AppNavbarVue from "../../components/AppNavbar..vue";
import AddQuestionsVue from "../../components/AddQuestions.vue";
export default {
    components: {
        CBox, AppNavbarVue, AddQuestionsVue
    }
}
</script>