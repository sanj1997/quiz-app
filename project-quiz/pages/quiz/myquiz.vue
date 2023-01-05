<template>
    <CBox>
        <AppNavbarVue/>
        <CBox w="80%" m="auto" display="grid" gridTemplateColumns="repeat(3,1fr)" gap="15px" mt="120px">
              <CFlex boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" p="20px" flexDirection="column" gap="15px" v-for="(el,i) in $store.state.myQuiz" :key="el._id">
                    <CText fontWeight="500">Quiz title: {{el.title}}</CText>
                    <CText fontWeight="500">No. Of Questions: {{el.data.length}}</CText>
                    <CButton @click="handleDelete(el._id,i)">Delete</CButton>
              </CFlex>
        </CBox>
    </CBox>
</template>
<script lang="js">
import {CBox, CButton, CFlex, CText,useToast} from "@chakra-ui/vue"
import AppNavbarVue from "../../components/AppNavbar..vue"
const toast=useToast()
export default{
    components:{
    CBox,
    AppNavbarVue,
    CText,
    CButton,
    CFlex
},
    async mounted(){
        const token=JSON.parse(localStorage.getItem("accessToken"))||""
        const name=JSON.parse(localStorage.getItem("name"))||""
        const title=JSON.parse(localStorage.getItem("title"))||""
        const noOfQuestions=JSON.parse(localStorage.getItem("noOfQuestions"))||0
        this.$store.commit("LOGIN_USER",{token,name})
        this.$store.commit("ADD_QUIZ_DETAILS",{title,noOfQuestions})
        await fetch("/api/quiz",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "authorization":this.$store.state.token||""
            }
        }).then(async(res)=>{
            const response=await res.json()
            this.$store.commit("ADD_MY_QUIZ",response.data)
        }).catch((e)=>{
            console.log(e)
        })
    },
    methods:{
        async handleDelete(id,i){
            this.$store.commit("REMOVE_FROM_MY_QUIZ",i)
            await fetch(`/api/quiz/${id}`,{
                method:"DELETE",
                headers:{
                "Content-Type":"application/json",
                "authorization":this.$store.state.token||""
                }
            }).then(async(res)=>{
                 const response=await res.json()
                 if(response.message==="Successful")
                 {
                    toast({
                        description:response.message,
                        duration:2000,
                        isClosable:false,
                        status:"success"
                    })
                 }
                 else
                 {
                    toast({
                        description:response.message,
                        duration:2000,
                        isClosable:false,
                        status:"error"
                    })
                 }
            })
        }
    }
}
</script>