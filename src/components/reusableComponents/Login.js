import React from 'react' 
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik' 
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import Inputbox from "./Inputbox"

const schema = Yup.object().shape({
    email: Yup.string().email("Enter valid email.").required("Required!"),
    password: Yup.string().required('Required!')
})

const initialValues = {
    email : "", 
    password : ""
}

const Login = props => {
    const { path, text, loginSubmit } = props

    const onSubmit = (values) => {
        loginSubmit(values)
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
                    <Col lg={4} md={6} sm={7} xs={10}>
                        <Form noValidate onSubmit={handleSubmit}>
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
                            <div className="text-center">
                                <Button type="submit">Login</Button>
                            </div>
                            <div className="text-center mt-3">
                                <Link to={path}>{text}</Link>
                            </div>
                        </Form>   
                    </Col>
                </Row>
            )}
        </Formik>
    )
}

export default Login