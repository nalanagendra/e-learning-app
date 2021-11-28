const initialTutorState = {errors: "", data: {}, isLoading: false} 

const tutorReducer = (state=initialTutorState, action) => {
    switch(action.type) {
        case "TUTOR_LOGIN_SUCCESS" : {
            return {
                ...state,
                errors: "",
                data: {...action.payload}
            }
        }

        case "TUTOR_LOGIN_ERROR" : {
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

export default tutorReducer