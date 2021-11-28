import React from 'react' 
import Login from '../reusableComponents/Login'
import { Container } from 'react-bootstrap'

const StudentLogin = props => {
    return (
        <Container>
            <h3 className="text-center my-5">Student Login</h3> 
            <Login path="/tutor/login" text="Are you a tutor?" />
        </Container>
    )
}

export default StudentLogin