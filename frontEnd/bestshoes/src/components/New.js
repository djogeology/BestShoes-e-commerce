// New.js
import React from 'react';
import ProductCard from './ProductCard';
import './CategoryPage.css';

const New = ({ products }) => {
  return (
    <div className="category-page">
      <h2>New Arrivals</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default New;
