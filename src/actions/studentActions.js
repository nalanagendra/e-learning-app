import axios from 'axios' 
import jwt_decode from 'jwt-decode'

export const startStudentLogin = (loginData, props) => {
    return (dispatch) => {
        axios.post("https://dct-e-learning.herokuapp.com/api/students/login", loginData) 
            .then(response => {
                if(response.data.hasOwnProperty("errors")) {
                    dispatch(studentLoginError(response.data.errors))
                } else {
                    const studentInfo = jwt_decode(response.data.token)
                    localStorage.setItem("user", JSON.stringify(studentInfo))
                    localStorage.setItem("token", response.data.token)
                    dispatch(studentLoginSuccess(studentInfo))
                    props.history.push("/")
                }
            })
            .catch(error => {
                dispatch(studentLoginError(error.message))
            })
    }
}

const studentLoginSuccess = (studentInfo) => {
    return {
        type : "STUDENT_LOGIN_SUCCESS",
        payload : studentInfo
    }
}

const studentLoginError = (error) => {
    return {
        type : "STUDENT_LOGIN_ERROR",
        payload : error
    }
}