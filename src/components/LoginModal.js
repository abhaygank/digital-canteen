import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function LoginModal({ show, handleClose, setRole, setIsLoggedIn }) {
  const [selectedRole, setSelectedRole] = useState('');

  const handleLogin = () => {
    if (selectedRole) {
      setRole(selectedRole);
      setIsLoggedIn(true);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formRole">
            <Form.Label>Select Role</Form.Label>
            <Form.Control
              as="select"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" className="mt-3" onClick={handleLogin}>
            Sign In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
