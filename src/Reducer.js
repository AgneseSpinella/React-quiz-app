const initState= {
    options: {
        loading: false,
        question_category: "",
        question_difficulty: "",
        question_type: "",
        amount_of_questions: 10,
    }
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
       default:
            return state
        }
}

export default Reducer;