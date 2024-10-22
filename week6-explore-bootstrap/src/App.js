// App.js
import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
// import SummaryCards from "./components/SummaryCards";
// import ChartWidget from "./components/ChartWidget";
// import RecentActivity from "./components/RecentActivity";
// import PerformanceMetrics from "./components/PerformanceMetrics";
// import Footer from "./components/Footer";
// import { Container, Row, Col } from "react-bootstrap";
import "./App.css"; // Import global styles

const App = () => {
  return (
    <div className="app-layout">
      <Header />
      <div className=" d-flex">
        <Sidebar />
        {/* <div className="content-container">
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
        </div> */}
      </div>
    </div>
  );
};

export default App;
