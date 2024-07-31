// src/components/OrderForm.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const OrderForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Place Order
      </Button>
    </Form>
  );
};

export default OrderForm;
