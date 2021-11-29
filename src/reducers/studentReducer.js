const initialStudentState = { errors: "", data: {}, isLoading: false } 

const studentReducer = (state=initialStudentState, action) => {
    switch(action.type) {
        case "STUDENT_LOGIN_SUCCESS" : {
            return {
                ...state,
                errors: "",
                data: action.payload
            }
        }

        case "STUDENT_LOGIN_ERROR" : {
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