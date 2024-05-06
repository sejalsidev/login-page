import React from "react";
import { Navbar, Nav, Container, DropdownButton,Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            <Link to="/add">Add Product</Link>
            <Link to="/update">Update Product</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Nav>
          <Nav>
            <DropdownButton id="dropdown-basic-button" title="User Name">
              <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
