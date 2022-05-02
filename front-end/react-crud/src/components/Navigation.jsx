import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to={'/'}>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="/About">
                <Nav.Link href="#link">About</Nav.Link>
              </Link>
              <NavDropdown title="Estudante" id="basic-nav-dropdown">
                <Link to={'/createStudent'}>
                  <NavDropdown.Item href="#action/3.1">
                    Adicionar
                  </NavDropdown.Item>
                </Link>
                <Link to={'/listStudent'}>
                  <NavDropdown.Item href="#action/3.2">Listar</NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Professor" id="basic-nav-dropdown">
                <Link to={'/createProfessor'}>
                  <NavDropdown.Item href="#action/3.1">Adicionar</NavDropdown.Item>
                </Link>
                <Link to={'/listProfessor'}>
                  <NavDropdown.Item href="#action/3.2">Listar</NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
