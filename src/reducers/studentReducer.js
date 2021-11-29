const initialStudentState = { errors: "", data: {}, isLoading: false } 

const studentReducer = (state=initialStudentState, action) => {
    switch(action.type) {
        case "STORE_STUDENT_INFO" : {
            return {
                ...state,
                errors: "",
                data: action.payload
            }
        }

        case "STUDENT_ERROR" : {
            return {
                ...state, 
                errors : action.payload, 
                data : {}
            }
        }

        default : {
            return state
        }
    }
}

export default studentReducer