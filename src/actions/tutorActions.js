import axios from 'axios'
import jwt_decode from "jwt-decode";

// Login tutor 
export const startTutorLogin = (loginData, props) => {
    return (dispatch) => {
        axios.post("https://dct-e-learning.herokuapp.com/api/admin/login", loginData)
        .then(response => {
            if(response.data.hasOwnProperty("errors")) {
                dispatch(tutorLoginError(response.errors))
            } else {
                const userData = jwt_decode(response.data.token)
                localStorage.setItem("user", JSON.stringify(userData))
                dispatch(tutorLoginSuccess(userData))
                props.history.push("/")
            }
        })
        .catch(error => {
            dispatch(tutorLoginError("Network Error"))
        })
    }
}

const tutorLoginSuccess = (loginData) => {
    return {
        type : "TUTOR_LOGIN_SUCCESS",
        payload : loginData
    }
}

const tutorLoginError = (error) => {
    return {
        type : "TUTOR_LOGIN_ERROR",
        payload : error
    }
}

//Register tutor
export const startTutorRegister = (registerData, props) => {
    return (dispatch) => {
        axios.post("https://dct-e-learning.herokuapp.com/api/admin/register", registerData)
            .then(response => {
                if(response.data.hasOwnProperty('errors')) {
                    console.log(response.data)
                    dispatch(tutorRegisterError(response.errors))

                } else {
                    props.history.push("/tutor/login")
                }
            })
            .catch(error => {
                console.log("catch", error)
                dispatch(tutorRegisterError("Network Error"))
            })
    }
}

const tutorRegisterError = (error) => {
    return {
        type : "TUTOR_REGISTER_ERROR",
        payload : error
    }
}

