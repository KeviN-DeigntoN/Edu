import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from './logo192.png'
function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' sticky='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width='50'
              height='50'
              alt='ZHOPATVOEMUINETU'
            />
          </Navbar.Brand>
          <NavbarToggle aria-controls='responsive-navbar-nav' />
          <NavbarCollapse id='responsive-navbar-nav'>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/createcourse">Create Course</Nav.Link>
              <Nav.Link href='/mycourse'>MyCourse</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='/profile'>
                <img
                  src={logo}
                  width='30'
                  height='30'
                  alt='Profile'
                />
              </Nav.Link>
              <Nav.Link href="/test">
                Test
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;