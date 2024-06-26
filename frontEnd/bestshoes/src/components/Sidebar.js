// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Refine Results</h3>
      <div className="sidebar-section">
        <input type="checkbox" id="pickup" name="pickup" />
        <label htmlFor="pickup">Pick up in store</label>
      </div>
      <div className="sidebar-section">
        <h4>Men Size</h4>
        {/* Add options for men size here */}
      </div>
      <div className="sidebar-section">
        <h4>Brand</h4>
        {/* Add options for brand here */}
      </div>
      <div className="sidebar-section">
        <h4>Shoe Style</h4>
        {/* Add options for shoe style here */}
      </div>
      <div className="sidebar-section">
        <h4>Color</h4>
        {/* Add options for color here */}
      </div>
      <div className="sidebar-section">
        <h4>Price</h4>
        {/* Add options for price range here */}
      </div>
      <div className="sidebar-section">
        <input type="checkbox" id="sale" name="sale" />
        <label htmlFor="sale">Sale</label>
      </div>
      <div className="sidebar-section">
        <input type="checkbox" id="new" name="new" />
        <label htmlFor="new">New</label>
      </div>
      <div className="sidebar-section">
        <input type="checkbox" id="footlocker" name="footlocker" />
        <label htmlFor="footlocker">Foot Locker Only</label>
      </div>
    </div>
  );
};

export default Sidebar;
