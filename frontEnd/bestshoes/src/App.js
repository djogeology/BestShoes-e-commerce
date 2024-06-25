// App.js
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import OnSale from './components/OnSale';
import New from './components/New';
import './App.css';

// Example product data
const productData = {
  men: [
    { id: 1, name: 'Men\'s Sneaker 1', image: 'path/to/mens-sneaker1.jpg', price: '$50' },
    { id: 2, name: 'Men\'s Sneaker 2', image: 'path/to/mens-sneaker2.jpg', price: '$60' },
    // Add more products as needed
  ],
  women: [
    { id: 1, name: 'Women\'s High Heel 1', image: 'path/to/womens-high-heel1.jpg', price: '$70' },
    { id: 2, name: 'Women\'s High Heel 2', image: 'path/to/womens-high-heel2.jpg', price: '$80' },
    // Add more products as needed
  ],
  kids: [
    { id: 1, name: 'Kid\'s Shoe 1', image: 'path/to/kids-shoe1.jpg', price: '$30' },
    { id: 2, name: 'Kid\'s Shoe 2', image: 'path/to/kids-shoe2.jpg', price: '$40' },
    // Add more products as needed
  ],
  onSale: [
    { id: 1, name: 'On Sale Shoe 1', image: 'path/to/on-sale-shoe1.jpg', price: '$20' },
    { id: 2, name: 'On Sale Shoe 2', image: 'path/to/on-sale-shoe2.jpg', price: '$25' },
    // Add more products as needed
  ],
  new: [
    { id: 1, name: 'New Arrival 1', image: 'path/to/new-arrival1.jpg', price: '$90' },
    { id: 2, name: 'New Arrival 2', image: 'path/to/new-arrival2.jpg', price: '$100' },
    // Add more products as needed
  ],
};

const App = () => {
  const [currentView, setCurrentView] = useState('home');

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
        <div className="logo">BestShoes</div>
        <input type="text" placeholder="Search..." className="search-bar" />
        <nav className="nav">
          <button onClick={() => setCurrentView('men')}>Men</button>
          <button onClick={() => setCurrentView('women')}>Women</button>
          <button onClick={() => setCurrentView('kids')}>Kids</button>
          <button onClick={() => setCurrentView('on-sale')}>On Sale</button>
          <button onClick={() => setCurrentView('new')}>New</button>
        </nav>
        <div className="header-icons">
          <div className="sign-in">Sign In</div>
          <div className="cart-icon">🛒</div>
        </div>
      </header>
      {renderView()}
    </div>
  );
};

export default App;
