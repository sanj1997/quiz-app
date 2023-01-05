export const state=()=>({
    quiz:[],
    noOfQuestions:0,
    title:"",
    token:"",
    isAuthenticated:false,
    name:"",
    myQuiz:[]
})

export const mutations={
    LOGIN_USER(state,payload){
        state.token=payload.token
        state.name=payload.name
    },
    LOGOUT_USER(state,payload){
        state.token=""    
    },
    ADD_QUIZ_DETAILS(state,payload){
        state.title=payload.title
        state.noOfQuestions=payload.noOfQuestions
    },
    ADD_QUIZ(state,payload){
        state.quiz=payload
    },
    ADD_MY_QUIZ(state,payload){
       state.myQuiz=payload
    },
    REMOVE_FROM_MY_QUIZ(state,payload){
        state.myQuiz.splice(payload,1)
    }
}