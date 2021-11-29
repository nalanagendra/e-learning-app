import axios from 'axios' 
import jwt_decode from 'jwt-decode'

export const startStudentLogin = (loginData, props) => {
    return (dispatch) => {
        axios.post("https://dct-e-learning.herokuapp.com/api/students/login", loginData) 
            .then(response => {
                if(response.data.hasOwnProperty("errors")) {
                    dispatch(studentError(response.data.errors))
                } else {
                    const studentInfo = jwt_decode(response.data.token)
                    localStorage.setItem("user", JSON.stringify(studentInfo))
                    localStorage.setItem("token", response.data.token)
                    dispatch(storeStudentInfo(studentInfo))
                    props.history.push("/")
                }
            })
            .catch(error => {
                dispatch(studentError(error.message))
            })
    }
}

const studentError = (error) => {
    return {
        type : "STUDENT_ERROR",
        payload : error
    }
}

//store student info
export const storeStudentInfo = (studentInfo) => {
    return {
        type : "STORE_STUDENT_INFO",
        payload : studentInfo
    }
}

