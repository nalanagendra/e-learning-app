import React from 'react' 
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import Register from '../reusableComponents/Register'
import { startTutorRegister } from '../../actions/tutorActions'

const TutorRegister = props => {
    const dispatch = useDispatch() 

    const registerSubmit = (values) => {
        dispatch(startTutorRegister(values, props))
    }

    return (
        <Container>
            <h3 className="text-center mt-5">Tutor Register</h3>
            <Register registerSubmit={registerSubmit} />
        </Container>
    )
}

export default TutorRegister