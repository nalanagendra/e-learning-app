import axios from 'axios'
import jwt_decode from "jwt-decode";

// Login tutor 
export const startTutorLogin = (loginData, props) => {
    return (dispatch) => {
        axios.post("https://dct-e-learning.herokuapp.com/api/admin/login", loginData)
        .then(response => {
            if(response.data.hasOwnProperty("errors")) {
                dispatch(tutorError(response.errors))
            } else {
                const userData = jwt_decode(response.data.token)
                localStorage.setItem("user", JSON.stringify(userData))
                localStorage.setItem("token", response.data.token)
                dispatch(storeTutorInfo(userData))
                props.history.push("/")
            }
        })
        .catch(error => {
            dispatch(tutorError("Network Error"))
        })
    }
}

const tutorError = (error) => {
    return {
        type : "TUTOR_ERROR",
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
                    dispatch(tutorError(response.errors))

                } else {
                    props.history.push("/tutor/login")
                }
            })
            .catch(error => {
                console.log("catch", error)
                dispatch(tutorError("Network Error"))
            })
    }
}

//get tutor info 
// export const startGetTutorInfo = () => {
//     console.log("tutor get info")
//     return (dispatch) => {
//         axios.get("https://dct-e-learning.herokuapp.com/api/admin/account", {
//             headers : {
//                 Authorization : localStorage.getItem("token")
//             }
//         })
//             .then(response => {
//                 dispatch(storeTutorInfo(response.data)) 
//             })
//             .catch(error => {
//                 dispatch(tutorError(error.errors))
//             })
//     }
// }

//store tutor info 
export const storeTutorInfo = (tutorInfo) => {
    return {
        type : "STORE_TUTOR_INFO",
        payload : tutorInfo
    }
}

