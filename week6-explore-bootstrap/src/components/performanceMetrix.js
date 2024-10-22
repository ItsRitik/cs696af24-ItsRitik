// components/PerformanceMetrics.js
import React from "react";
import { ProgressBar } from "react-bootstrap";

const PerformanceMetrics = () => (
  <div className="p-3">
    <h5>Performance Metrics</h5>
    <ProgressBar now={60} label="60%" className="mb-3" />
    <ProgressBar now={85} label="85%" className="mb-3" />
  </div>
);

export default PerformanceMetrics;
