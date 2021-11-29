import React from "react" 
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Route, Switch, NavLink, Link } from 'react-router-dom' 
import { useSelector } from "react-redux"

import Home from './Home'
import StudentLogin from './studentModule/StudentLogin'
import TutorLogin from './tutorModule/TutorLogin'
import TutorRegister from './tutorModule/TutorRegister'

const NavBar = props => {
    const role = useSelector(state => state.tutor.data.role || state.student.data.role)
    console.log(role)

    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark" style={{position: "sticky", top: "0"}}>
                <Container fluid>
                   <Navbar.Brand as={Link} to="/">E-learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{fontWeight : "700", marginRight: "2rem"}}>
                        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                        {/* Conditional check for Nav items */}
                        {!localStorage.getItem('token') && (<>
                            <Nav.Link as={NavLink} to="/student/login" exact>Student</Nav.Link>
                            <NavDropdown title="Tutor" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/tutor/login">Login</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/tutor/signup">Register</NavDropdown.Item>
                            </NavDropdown>
                        </>
                        )} 
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/student/login" component={StudentLogin} exact />
                <Route path="/tutor/login" component={TutorLogin} exact />
                <Route path="/tutor/signup" component={TutorRegister} exact />
            </Switch>
        </div>
    )
}

export default NavBar