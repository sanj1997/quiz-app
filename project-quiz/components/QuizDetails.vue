<template>
    <CBox w="50%" m="auto" mt="120px">
        <CText textAlign="center" fontWeight="700" fontSize="2xl">Enter Quiz Details</CText>
        <form @submit.prevent="handleAddDetails()">
            <CFlex w="100%" flexDirection="column" mt="20px" alignItems="center">
                 <CFormControl>
                    <CFormLabel>Quiz Name</CFormLabel>
                    <CInput v-model="title" required="true" placeholder="Enter quiz name" />
                    <CFormLabel mt="15px">No. of questions</CFormLabel>
                    <CSelect  required="true" v-model="noOfQuestions">
                        <option value="2">2</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                    </CSelect>
                    <CButton w="100%" mt="20px" type="submit">ADD</CButton>
                    <nuxt-link to="/quiz/create"><CText fontWeight="500" mt="10px" textAlign="center" fontSize="xs" textDecoration="underline">Click here to add questions</CText></nuxt-link>
                 </CFormControl>
            </CFlex>
        </form>
    </CBox>
</template>
<script lang="js">

import { CBox,CInput, CButton,CText,CFlex, CFormControl, CFormLabel, CSelect, useToast } from "@chakra-ui/vue"
const toast=useToast()
export default {
    data(){
    return {
        title:"",
        noOfQuestions:0
    }
    },
    components: {
        CBox,CInput, CButton,CText,CFlex, CFormControl, CFormLabel,CSelect
    },
    mounted() {
      const token=JSON.parse(localStorage.getItem("accessToken"))
      const name=JSON.parse(localStorage.getItem("name"))
      this.$store.commit("LOGIN_USER",{token,name})
    },
    methods: {
        handleAddDetails(){
            localStorage.setItem("title",JSON.stringify(this.title))
            localStorage.setItem("noOfQuestions",JSON.stringify(this.noOfQuestions))
            this.$store.commit("ADD_QUIZ_DETAILS",{title:this.title,noOfQuestions:this.noOfQuestions})
            toast({
                description:"Quiz details added successfully",
                isClosable:false,
                duration:2000,
                status:"success"
            })
        }
    },
}
</script>