import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css'; // Import your CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <Container>
        <Row>
          <Col>
            <h1>Welcome to Our Website!</h1>
            <p>Some introductory text or components...</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;