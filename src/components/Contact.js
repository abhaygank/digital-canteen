// src/pages/Contact.js
import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    food: '',
    cleanliness: '',
    taste: '',
    ambience: '',
    comment: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    handleShow();
  };

  return (
    <Container className="contact-container mt-5">
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formFood">
          <Form.Label>Food</Form.Label>
          <Form.Control
            as="select"
            name="food"
            value={formData.food}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formCleanliness">
          <Form.Label>Cleanliness</Form.Label>
          <Form.Control
            as="select"
            name="cleanliness"
            value={formData.cleanliness}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formTaste">
          <Form.Label>Taste</Form.Label>
          <Form.Control
            as="select"
            name="taste"
            value={formData.taste}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formAmbience">
          <Form.Label>Ambience</Form.Label>
          <Form.Control
            as="select"
            name="ambience"
            value={formData.ambience}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formComment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your feedback is appreciated.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Contact;
