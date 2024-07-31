import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import Menu from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';
import Cart from './components/Cart';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [role, setRole] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const handleLogout = () => {
    setRole('');
    setIsLoggedIn(false);
  };

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCartItems.map(cartItem => 
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateCartQuantity = (itemId, quantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map(cartItem =>
        cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  return (
    <Router>
      <div className="app">
        <Navbar expand="lg" className="navbar">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">Classy Canteen Corner</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
              {isLoggedIn ? (
                <>
                  <Button variant="outline-light" className="ms-2" disabled>
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </Button>
                  <Button variant="danger" className="ms-2" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="primary" className="ms-2" onClick={handleShowSignIn}>
                    Sign In
                  </Button>
                  <Button variant="secondary" className="ms-2" onClick={handleShowSignUp}>
                    Sign Up
                  </Button>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu role={role} addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} clearCart={clearCart} updateCartQuantity={updateCartQuantity} />} />
        </Routes>

        <LoginModal show={showSignIn} handleClose={handleCloseSignIn} setRole={setRole} setIsLoggedIn={setIsLoggedIn} />
        <RegisterModal show={showSignUp} handleClose={handleCloseSignUp} setRole={setRole} setIsLoggedIn={setIsLoggedIn} />

        <footer className="footer mt-auto py-3">
          <Container>
            <Row>
              <Col lg={3} md={6} className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="#!" className="text-dark">Privacy Policy</a></li>
                  <li><a href="#!" className="text-dark">Terms of Service</a></li>
                  <li><a href="#!" className="text-dark">FAQ</a></li>
                  <li><a href="#!" className="text-dark">Contact</a></li>
                </ul>
              </Col>
              <Col lg={3} md={6} className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Follow Us</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="#!" className="text-dark">Facebook</a></li>
                  <li><a href="#!" className="text-dark">Twitter</a></li>
                  <li><a href="#!" className="text-dark">Instagram</a></li>
                  <li><a href="#!" className="text-dark">LinkedIn</a></li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="text-center p-3" style={{ backgroundColor: '#8a4f39' }}>
            &copy; 2024 Classy Canteen Corner
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
