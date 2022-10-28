import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap'
import $ from 'jquery';
import Popper from 'popper.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg= "#73e58c" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img className="logo" src={process.env.PUBLIC_URL + "/logo.png"}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/colors">Colors</Nav.Link>
            <Nav.Link href="/layouts">Layouts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


const NavBarLayout = () => {
  return (
    <>
      <BasicExample />

      <Outlet />
    </>
  )
};

export default NavBarLayout;