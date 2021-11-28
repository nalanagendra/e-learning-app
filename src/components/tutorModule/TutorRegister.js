import React from 'react' 
import { Container } from 'react-bootstrap'

import Register from '../reusableComponents/Register'

const TutorRegister = props => {
    return (
        <Container>
            <h3 className="text-center mt-5">Tutor Register</h3>
            <Register />
        </Container>
    )
}

export default TutorRegister