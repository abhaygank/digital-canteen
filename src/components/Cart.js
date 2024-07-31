import React, { useState, useEffect } from 'react';
import { Container, Card, Button, ListGroup, Image } from 'react-bootstrap';

const Cart = ({ cartItems, clearCart }) => {
  const [itemQuantities, setItemQuantities] = useState({});

  // Initialize item quantities when cart items change
  useEffect(() => {
    const initialQuantities = cartItems.reduce((quantities, item) => {
      quantities[item.id] = item.quantity || 1;
      return quantities;
    }, {});
    setItemQuantities(initialQuantities);
  }, [cartItems]);

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace('₹', ''));
    return total + (itemPrice * itemQuantities[item.id]);
  }, 0).toFixed(2);

  const handleIncreaseQuantity = (itemId) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[itemId] = (updatedQuantities[itemId] || 0) + 1;
    setItemQuantities(updatedQuantities);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedQuantities = { ...itemQuantities };
    if (updatedQuantities[itemId] > 1) {
      updatedQuantities[itemId] -= 1;
      setItemQuantities(updatedQuantities);
    }
  };

  const handleClearCart = () => {
    clearCart();
    setItemQuantities({});
  };

  if (cartItems.length === 0) {
    return (
      <Container>
        <h2 className="mt-4 mb-4">Cart</h2>
        <Card>
          <Card.Body>
            <Card.Text>Your cart is empty.</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="mt-4 mb-4">Cart</h2>
      <ListGroup className="mb-3">
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id}>
            <div className="d-flex justify-content-between align-items-center">
              <Image src={item.image} rounded width="50" height="50" />
              <div className="ms-3">
                <span className="fw-bold">{item.name}</span> - ₹{item.price}
              </div>
              <div className="d-flex align-items-center">
                <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
                <span>{itemQuantities[item.id]}</span>
                <Button variant="outline-primary" size="sm" className="ms-2" onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="text-end mb-3">
        <Button variant="secondary" onClick={handleClearCart}>Clear Cart</Button>
      </div>
      <Card>
        <Card.Body>
          <Card.Text>Total: ₹{totalPrice}</Card.Text>
          <Button variant="primary">Checkout</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cart;
