import React from 'react' 
import Login from '../reusableComponents/Login'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { startStudentLogin } from '../../actions/studentActions'

const StudentLogin = props => {
    const dispatch = useDispatch()

    const loginSubmit = (values) => {
        dispatch(startStudentLogin(values, props))
    }

    return (
        <Container>
            <h3 className="text-center my-5">Student Login</h3> 
            <Login path="/tutor/login" text="Are you a tutor?" loginSubmit={loginSubmit} />
        </Container>
    )
}

export default StudentLogin