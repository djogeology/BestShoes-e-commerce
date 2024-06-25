// Kids.js
import React from 'react';
import ProductCard from './ProductCard';
import './CategoryPage.css';

const Kids = ({ products }) => {
  return (
    <div className="category-page">
      <h2>Kids' Shoes</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Kids;
