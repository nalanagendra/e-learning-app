import React from 'react' 
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik' 
import * as Yup from 'yup' 
import { Link } from 'react-router-dom'

import Inputbox from './Inputbox'

const initialValues = {
    username : "",
    email : "", 
    password : "", 
    academy : {
        name : "",
        website : ""
    }
}

const schema = Yup.object().shape({
    username: Yup.string()
        .required("Required!")
        .trim().min(6, "Minimum 6 characters required")
        .max("16", "Maximum 16 characters"),
    email: Yup.string().email("Enter valid email.").required("Required!"),
    password: Yup.string()
        .required('Required!')
        .min(6, "Minimum 6 characters required")
        .max("16", "Maximum 16 characters"),
    academy: Yup.object().shape({
        name: Yup.string().required("Required!"),
    })
})

const Register = props => {
    const onSubmit = (values) => {
        
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Row className="align-items-center justify-content-center">
                    <h4 className="text-center my-3">Tutor details</h4>
                    <Col lg={4} md={6} sm={7} xs={10}>
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group>
                                <Inputbox>
                                    <Form.Control 
                                        type="text"
                                        name="username"
                                        placeholder="Enter username"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.username && errors.username ? (
                                        <div className="text-danger">{errors.username}</div>
                                    ): null}
                                </Inputbox>
                            </Form.Group>
                            <Form.Group>
                                <Inputbox>
                                    <Form.Control 
                                        type="text"
                                        name="email"
                                        placeholder="Enter email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.email && errors.email ? (
                                        <div className="text-danger">{errors.email}</div>
                                    ): null}
                                </Inputbox>
                            </Form.Group>
                            <Form.Group>
                                <Inputbox>
                                    <Form.Control 
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.password && errors.password ? (
                                        <div className="text-danger">{errors.password}</div>
                                    ): null}
                                </Inputbox>
                            </Form.Group>
                            <h4 className="text-center my-3">Academy details</h4>
                            <Form.Group>
                                <Inputbox>
                                    <Form.Control 
                                        type="text"
                                        name="academy.name"
                                        placeholder="Enter academy name"
                                        value={values.academy.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.academy && errors.academy ? (
                                        <div className="text-danger">{errors.academy.name}</div>
                                    ): null}
                                </Inputbox>
                            </Form.Group>
                            <Form.Group>
                                <Inputbox>
                                    <Form.Control 
                                        type="text"
                                        name="academy.website"
                                        placeholder="Enter academy website"
                                        value={values.academy.website}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Inputbox>
                            </Form.Group>
                            <div className="text-center">
                                <Button type="submit">Login</Button>
                            </div>
                            <div className="text-center mt-3 mb-5">
                                <Link to="/tutor/login">Already have an account?</Link>
                            </div>
                        </Form>   
                    </Col>
                </Row>
            )}
        </Formik>
    )
}

export default Register