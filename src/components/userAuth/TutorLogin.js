import React from 'react' 
import Login from './Login'
import { Container } from 'react-bootstrap'

const TutorLogin = props => {
    return (
        <Container>
            <h3 className="text-center my-5">Tutor Login</h3>
            <Login path="/student/login" text="Are you a student?" />

        </Container>
    )
}

export default TutorLogin