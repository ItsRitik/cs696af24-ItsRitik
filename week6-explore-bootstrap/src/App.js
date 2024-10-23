// App.js
import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import SummaryCards from "./components/summeryCard";
import ChartWidget from "./components/chartWidget";
import RecentActivity from "./components/activityTable";
import PerformanceMetrics from "./components/performanceMetrix";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => setSidebarActive(!isSidebarActive);

  return (
    <div className="app-layout">
      <Header toggleSidebar={toggleSidebar} />
      <div className={`main-layout ${isSidebarActive ? "sidebar-active" : ""}`}>
        <Sidebar isMobile toggleSidebar={toggleSidebar} />
        <div className="content-container">
          <Container fluid className="mt-4">
            <SummaryCards />
            <Row>
              <Col md={8}>
                <ChartWidget />
              </Col>
              <Col md={4}>
                <PerformanceMetrics />
              </Col>
            </Row>
            <RecentActivity />
          </Container>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
