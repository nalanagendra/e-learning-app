import React from 'react' 
import Login from './Login'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { startTutorLogin } from '../../actions/tutorActions'

const TutorLogin = props => {
    const dispatch = useDispatch()

    const loginSubmit = (loginData) => {
        dispatch(startTutorLogin(loginData, props))
    }

    return (
        <Container>
            <h3 className="text-center my-5">Tutor Login</h3>
            <Login loginSubmit={loginSubmit} path="/student/login" text="Are you a student?" />

        </Container>
    )
}

export default TutorLogin