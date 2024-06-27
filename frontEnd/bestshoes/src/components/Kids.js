// Kids.js
import React from 'react';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import './CategoryPage.css';

const Kids = ({ products }) => {
  return (
    <div className="category-page">
      <h1>Kids' Shoes</h1>
      <div className="category-content">
        <Sidebar />
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kids;
