const initState= {
    options: {
        loading: false,
        question_category: "",
        question_difficulty: "",
        question_type: "",
        amount_of_questions: 10,
        index: 0,
        score: 0
    }, questions: []
};

/* spread operator to create a copy of the object; i will need it as new value and i don't
mutate ste originally state object directly*/
const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_LOADING":
            return { 
                ...state,
                options: {
                    ...state.options,
                    loading: action.value
                }
            }
        case "CHANGE_CATEGORY":
            return {
                ...state,
                options: {
                    ...state.options,
                    question_category:action.value
                }
            }
        case "CHANGE_DIFFICULTY":
            return {
                ...state,
                options: {
                    ...state.options,
                    question_difficulty:action.value
                }
            }            
        case "CHANGE_TYPE":
            return {
                ...state,
                options: {
                    ...state.options,
                    question_type:action.value
                }
            }
        case "SET_QUESTIONS":
            return {
                ...state,
                options: {
                    ...state.options,
                    questions: action.questions
                }
            }
        case "SET_INDEX":
            return {
                ...state,
                index: action.index
            }
        case "SET_SCORE":
            return {
                ...state,
                score: action.score
            }
       default:
            return state
        }
}

export default Reducer;