const initialTutorState = {errors: "", data: {}, isLoading: false} 

const tutorReducer = (state=initialTutorState, action) => {
    switch(action.type) {
        case "STORE_TUTOR_INFO" : {
            return {
                ...state,
                errors: "",
                data: {...action.payload}
            }
        }
 
        case "TUTOR_ERROR" : {
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