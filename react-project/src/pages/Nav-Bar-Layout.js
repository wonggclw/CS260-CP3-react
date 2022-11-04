import { Outlet, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap'
import $ from 'jquery';
import Popper from 'popper.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function BasicExample() {
  return (
    <Navbar bg= "#73e58c" variant="light" expand="lg">
      <Container>
        <Navbar.Brand to="/">
        <img className="logo" src={process.env.PUBLIC_URL + "/logo.png"}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/colors">
              <Nav.Link>Colors</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/layouts">
              <Nav.Link>Layouts</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Header({title}){
  return(
    <div className="container page-head">
      <h1 className="page-header">{title}</h1>
    </div>
   ) 
}

const NavBarLayout = () => {
  return (
    <>
      <Header title="STYLESHEETS"/>
      <BasicExample />

      <Outlet />
    </>
  )
};

export default NavBarLayout;