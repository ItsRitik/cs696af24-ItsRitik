// components/Header.js
import React from "react";
import { Navbar, Form, FormControl, Nav, Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FaBell } from "react-icons/fa";
import "./Header.css"; // Import CSS for styling

const Header = () => {
  return (
    <Navbar fixed="top" className="bg-body-tertiary" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-dark text-lg" href="#">
          Chart.js
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
          <Nav.Link href="#" className="text-dark px-4">
            <FaBell size={20} />
          </Nav.Link>
          <Dropdown align="end" className="px-1 text-dark">
            <Dropdown.Toggle
              className="text-dark"
              variant="outline-light"
              id="dropdown-basic"
            >
              Profile
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
