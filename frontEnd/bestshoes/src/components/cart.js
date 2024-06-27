import React, { useState } from 'react';
import './cart.css';

const Cart = ({initialCartItems,cartItems,setCartItems}) => {
 

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleEmptyCart = () => {
    setCartItems([]);
  };

  const handleProceedToPayment = () => {
    alert('Proceeding to payment...');
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: £{item.price}</p>
              <div className="cart-item-quantity">
                <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                <input
                  id={`quantity-${item.id}`}
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
              </div>
              <button className="remove-item-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total Price: £{totalPrice}</h2>
        <button className="empty-cart-button" onClick={handleEmptyCart}>Empty Cart</button>
        <button className="proceed-payment-button" onClick={handleProceedToPayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Cart;
