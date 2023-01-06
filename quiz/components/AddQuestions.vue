<template>
    <CFlex  w="100%" m="auto" mt="80px" mb="50px" justifyContent="space-evenly" alignItems="center">
        <CFlex boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"  p="20px" w="40%" flexDirection="column" mt="20px" alignItems="center">
            <CText textAlign="center" fontWeight="700" fontSize="2xl">Quiz Form</CText>
        <form @submit.prevent="handleAddQuiz()">
            <CFlex  w="100%" flexDirection="column" mt="20px">
                 <CFormControl>
                    <CFormLabel >Question Name</CFormLabel>
                    <CInput v-model="question" placeholder="Enter question name" />
                    <CFormLabel mt="15px">Question Type</CFormLabel>
                    <CSelect v-model="type" placeholder="Select question type">
                        <option value="single-answer">Single answer</option>
                        <option value="multiple-answer">Multiple answer</option>
                    </CSelect>
                    <CFormLabel mt="15px">No. Of Options</CFormLabel>
                    <CSelect v-model="noOfOtions">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </CSelect>
                    
                    <CFlex mt="20px" alignItems="center" justifyContent="space between" gap="20px">
                        <CBox alignItems="center">
                            <CFormLabel>Option {{optionsCount}}</CFormLabel>
                            <CInput v-model="options" placeholder="Enter option" />
                        </CBox>
                        <CButton @click="handleAddOptions()">Add option</CButton>
                    </CFlex>
                    <CFlex mt="10px" alignItems="center" justifyContent="space between" gap="20px">
                        <CBox alignItems="center">
                            <CFormLabel mt="15px">Correct Answer {{ansCount}}</CFormLabel>
                            <CInput v-model="answer" placeholder="Enter correct answer" />
                        </CBox>
                        <CButton @click="handleAddAnswer()">Add answer</CButton>
                    </CFlex>
                    <CButton w="100%" mt="20px" @click="handleAddOuestion()">Add Question</CButton>
                    <CButton v-if="count==$store.state.noOfQuestions" w="100%" mt="20px" type="submit">Submit Quiz</CButton>
                 </CFormControl>
            </CFlex>
        </form>
        </CFlex>
        <CFlex boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" w="40%" p="20px" flexDirection="column" alignItems="center">
            <CText fontWeight="800" fontSize="3xl">Title: {{$store.state.title}}</CText>
            <CText fontWeight="500" fontSize="3xl">No. Of Questions Added: {{count}}/{{$store.state.noOfQuestions}}</CText>
        </CFlex>
    </CFlex>
</template>
<script>

import { CInput, CButton,CText,CFlex, CFormControl, CFormLabel, CSelect, CBox,useToast  } from "@chakra-ui/vue"
const toast=useToast()
export default {
    data(){
      return {
        count:0,
        data:[],
        question:"",
        optionsCount:1,
        type:"",
        noOfOtions:0,
        options:"",
        answer:"",
        optionsArr:[],
        answersArr:[],
        ansCount:1,
      }
    },
    components: {
        CInput, CButton,CText,CFlex, CFormControl, CFormLabel,CSelect,CBox
    },
    methods:{
       handleAddOptions(){
        if(this.options==="")
        {
            toast({
                description:"Options cannot be empty",
                isClosable:false,
                duration:2000,
                status:"error"
            })
            return
        }
         if(this.optionsCount<=+this.noOfOtions)
         {
            this.optionsCount=this.optionsCount+1
            toast({
                description:"Option addedd successfully",
                isClosable:false,
                duration:2000,
                status:"success"
            })
            this.optionsArr.push(this.options)
            this.options=""
         }
         else
         {
            toast({
                description:"Options limit reached",
                isClosable:false,
                duration:2000,
                status:"error"
            })
            this.options=""    
         }
       },
       handleAddAnswer(){
        if(this.answer==="")
        {
            toast({
                description:"Answer cannot be empty",
                isClosable:false,
                duration:2000,
                status:"error"
            })
            return
        }
          if(this.type==="single-answer"&&+this.ansCount<=1)
          {
            this.ansCount=this.ansCount+1
            toast({
                description:"Answer added successfully",
                isClosable:false,
                duration:2000,
                status:"success"
            })
            this.answersArr.push(this.answer)
            this.answer=""
           
          }
          else if(this.type==="single-answer"&&this.ansCount>1)
          {
            toast({
                description:"Answer limit exceeded",
                isClosable:false,
                duration:2000,
                status:"error"
            })
            this.answer=""
          }
          if(this.type==="multiple-answer")
          {
            this.ansCount=this.ansCount+1
            toast({
                description:"Answer added successfully",
                isClosable:false,
                duration:2000,
                status:"success"
            })
            this.answersArr.push(this.answer)
            this.answer=""
            this.type=""
          }
       },
       handleAddOuestion(){
        if(this.answersArr.length<=0||this.optionsArr<=0)
        {
            toast({
                description:"Please add options and answers",
                isClosable:false,
                duration:2000,
                status:"error"
                })
                return
        }
            if(this.count<+this.$store.state.noOfQuestions)
            {
                this.count=this.count+1
                this.data.push({options:this.optionsArr,answer:this.answersArr})
                toast({
                description:"Question added successfully",
                isClosable:false,
                duration:2000,
                status:"success"
                })
                this.question=""
                this.type=""
                this.ansCount=1
                this.optionsCount=1
                this.answer=""
                this.options=""
                this.answersArr=[]
                this.optionsArr=[]
            }
            else
            {
                toast({
                description:"Total questions limit reached",
                isClosable:false,
                duration:2000,
                status:"error"
                })
            }
       },
       async handleAddQuiz (){
        if(this.data.length===0)
        {
            toast({
                description:"Quiz data is empty",
                isClosable:false,
                duration:2000,
                status:"error"
                })
            return 
        }
        this.$store.commit("ADD_QUIZ",this.data)
        try{
            await fetch("/api/quiz/add-quiz",{
            method:"POST",
            body:JSON.stringify({title:this.$store.state.title,data:this.$store.state.quiz}),
            headers:{
                "content-Type":"application/json",
                "authorization":this.$store.state.token
            }
          }).then(async(res)=>{
            const response=await res.json()
            this.data=[]
            console.log(response)
            toast({
                description:"Quiz added successfully",
                isClosable:false,
                duration:2000,
                status:"success"
                })
          })
         }catch(e){
           console.log(e)
         }
       }
    },
    mounted() {
      const token=JSON.parse(localStorage.getItem("accessToken"))||""
      const name=JSON.parse(localStorage.getItem("name"))||""
      const title=JSON.parse(localStorage.getItem("title"))||""
      const noOfQuestions=JSON.parse(localStorage.getItem("noOfQuestions"))||0
      this.$store.commit("LOGIN_USER",{token,name})
      this.$store.commit("ADD_QUIZ_DETAILS",{title,noOfQuestions})
    }
}
</script>