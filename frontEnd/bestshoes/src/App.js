import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import OnSale from './components/OnSale';
import New from './components/New';
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';
import RegisterPopup from './components/RegisterPopup';
import './App.css';

// Example product data
const productData = {
  men: [
    { id: 1, name: "Men's Sneaker 1", image: 'path/to/mens-sneaker1.jpg', price: '$50' },
    { id: 2, name: "Men's Sneaker 2", image: 'path/to/mens-sneaker2.jpg', price: '$60' },
  ],
  women: [
    { id: 1, name: "Women's High Heel 1", image: 'path/to/womens-high-heel1.jpg', price: '$70' },
    { id: 2, name: "Women's High Heel 2", image: 'path/to/womens-high-heel2.jpg', price: '$80' },
  ],
  kids: [
    { id: 1, name: "Kid's Shoe 1", image: 'path/to/kids-shoe1.jpg', price: '$30' },
    { id: 2, name: "Kid's Shoe 2", image: 'path/to/kids-shoe2.jpg', price: '$40' },
  ],
  onSale: [
    { id: 1, name: 'On Sale Shoe 1', image: 'path/to/on-sale-shoe1.jpg', price: '$20' },
    { id: 2, name: 'On Sale Shoe 2', image: 'path/to/on-sale-shoe2.jpg', price: '$25' },
  ],
  new: [
    { id: 1, name: 'New Arrival 1', image: 'path/to/new-arrival1.jpg', price: '$90' },
    { id: 2, name: 'New Arrival 2', image: 'path/to/new-arrival2.jpg', price: '$100' },
  ],
};

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginClick = () => setIsLoginOpen(true);
  const handleRegisterClick = () => setIsRegisterOpen(true);

  const handleClosePopup = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  const handleLoginSuccess = (user) => {
    setUser(user);
    setIsLoginOpen(false);
    setCurrentView('home');
  };

  const handleRegisterSuccess = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const renderView = () => {
    switch (currentView) {
      case 'men':
        return <Men products={productData.men} />;
      case 'women':
        return <Women products={productData.women} />;
      case 'kids':
        return <Kids products={productData.kids} />;
      case 'on-sale':
        return <OnSale products={productData.onSale} />;
      case 'new':
        return <New products={productData.new} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo" onClick={() => setCurrentView('home')}>BestShoes</div>
        <div className="search-bar">
          <div className="input-container">
            <input type="text" className="input-box" placeholder="Enter text here..." />
          </div>
        </div>
        <nav className="nav">
          <button onClick={() => setCurrentView('men')}>Men</button>
          <button onClick={() => setCurrentView('women')}>Women</button>
          <button onClick={() => setCurrentView('kids')}>Kids</button>
          <button onClick={() => setCurrentView('on-sale')}>On Sale</button>
          <button onClick={() => setCurrentView('new')}>New</button>
        </nav>
        <div className="header-icons">
          {user ? (
            <>
              <img src={URL.createObjectURL(user.image)} alt="User" className="user-image" />
              <div className="sign-in">{user.username}</div>
            </>
          ) : (
            <div className="sign-in" onClick={handleLoginClick}>Sign In</div>
          )}
          <div className="cart-icon">🛒</div>
        </div>
      </header>
      {renderView()}
      <Footer />
      {isLoginOpen && (
        <LoginPopup
          onClose={handleClosePopup}
          onSuccess={handleLoginSuccess}
          onRegisterClick={handleRegisterClick}
        />
      )}
      {isRegisterOpen && (
        <RegisterPopup
          onClose={handleClosePopup}
          onSuccess={handleRegisterSuccess}
        />
      )}
    </div>
  );
};

export default App;
