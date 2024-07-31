// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import './Navbar.css';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginOpen = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const handleRegisterOpen = () => setShowRegister(true);
  const handleRegisterClose = () => setShowRegister(false);

  return (
    <nav className="navbar">
      <h1>Classy Canteen Corner</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
        <button onClick={handleLoginOpen}>Login</button>
        <button onClick={handleRegisterOpen}>Register</button>
      </div>
      <LoginModal show={showLogin} handleClose={handleLoginClose} />
      <RegisterModal show={showRegister} handleClose={handleRegisterClose} />
    </nav>
  );
};

export default Navbar;
