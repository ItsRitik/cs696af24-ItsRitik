// components/Sidebar.js
import React, { useState } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import {
  FaHome,
  FaChartBar,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./sidebar.css"; // Import the CSS file for styling

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`sidebar-container d-flex flex-column vh-100 bg-light ${
        collapsed ? "collapsed" : ""
      }`}
    >
      <Navbar className="p-3">
        <Button
          onClick={() => setCollapsed(!collapsed)}
          variant="outline-secondary"
        >
          {collapsed ? ">" : "<"}
        </Button>
      </Navbar>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="#">
            <FaHome fontSize={26} /> {collapsed ? "" : "Home"}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">
            <FaChartBar fontSize={26} /> {collapsed ? "" : "Dashboard"}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">
            <FaUsers fontSize={26} /> {collapsed ? "" : "Users"}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">
            <FaCog fontSize={26} /> {collapsed ? "" : "Settings"}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">
            <FaSignOutAlt fontSize={26} /> {collapsed ? "" : "Logout"}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
