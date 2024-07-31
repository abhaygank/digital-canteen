// src/components/Filter.js

import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Filter = ({ applyFilter }) => {
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilter(filter);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col xs={8} sm={10}>
          <Form.Control
            type="text"
            placeholder="Filter by category"
            value={filter}
            onChange={handleChange}
          />
        </Col>
        <Col xs={4} sm={2}>
          <Button variant="primary" type="submit">Apply Filter</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;
