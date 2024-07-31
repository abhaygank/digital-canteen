import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Menulist.css';

function MenuList({ menuItems }) {
  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <Card key={index} className="menu-card">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>{item.price}</Card.Text>
            <Button variant="primary">Order Now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default MenuList;
