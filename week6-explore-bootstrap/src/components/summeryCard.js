// components/SummaryCards.js
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const SummaryCards = () => {
  const stats = [
    { title: "Total Users", value: "1,500" },
    { title: "Revenue", value: "$35,000" },
    { title: "Orders", value: "280" },
    { title: "Conversion Rate", value: "4.5%" },
  ];

  return (
    <Row>
      {stats.map((stat, index) => (
        <Col key={index} md={3}>
          <Card className="m-2">
            <Card.Body>
              <Card.Title>{stat.title}</Card.Title>
              <Card.Text>{stat.value}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SummaryCards;
