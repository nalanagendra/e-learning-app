import React from "react" 
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Route, Switch, NavLink, Link } from 'react-router-dom' 

import Home from './Home'
import StudentLogin from './userAuth/StudentLogin'
import TutorLogin from './userAuth/TutorLogin'
import Signup from './userAuth/Signup'

const NavBar = props => {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark" style={{position: "sticky", top: "0"}}>
                <Container fluid>
                   <Navbar.Brand as={Link} to="/">E-learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{fontWeight : "700", marginRight: "2rem"}}>
                        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/student/login" exact>Student</Nav.Link>
                        <NavDropdown title="Tutor" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/tutor/login">Login</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/tutor/signup">Sign up</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/student/login" component={StudentLogin} exact />
                <Route path="/tutor/login" component={TutorLogin} exact />
                <Route path="/tutor/signup" component={Signup} exact />
            </Switch>
        </div>
    )
}

export default NavBar