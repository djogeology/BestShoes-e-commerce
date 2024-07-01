import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import ProductDetails from './ProductDetails';
import './CategoryPage.css';

const Women = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [filteredBy, setFilteredBy] = useState([]);
  const [filterTrigger, setFilterTrigger] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products/category/Women')
      .then(response => {
        setProducts(response.data);
        setProductFiltered(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (filterTrigger) {
      setFilteredBy(prevFilters => [...prevFilters, filterTrigger]);
    }
  }, [filterTrigger]);

  useEffect(() => {
    if (filteredBy.length === 0) {
      setProductFiltered(products);
    } else {
      const applyFilters = (filters, i = 0, data = products) => {
        if (i === filters.length) {
          return data;
        }

        const key = Object.keys(filters[i])[0];
        const value = filters[i][key];

        if (key === 'size') {
          data = data.filter(product => product[key].includes(+value));
        } else if (key === 'price') {
          const [minPrice, maxPrice] = extractNumbers(value);
          data = data.filter(product => {
            const productPrice = parseFloat(product[key].replace(/[^0-9.-]+/g, ''));
            return productPrice >= minPrice && productPrice <= maxPrice;
          });
        } else {
          data = data.filter(product => product[key] === +value);
        }

        return applyFilters(filters, i + 1, data);
      };

      setProductFiltered(applyFilters(filteredBy));
    }
  }, [filteredBy, products]);

  function extractNumbers(range) {
    const numbers = range.match(/\d+/g);
    return numbers ? numbers.map(Number) : [];
  }

  const handleProductClick = product => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = product => {
    onAddToCart(product);
  };

  return (
    <div className="category-page">
      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          onBack={handleBack}
          onAddToCart={handleAddToCart}
        />
      ) : (
        <>
          <h1>Women's High Heels</h1>
          <div className="category-content">
            <Sidebar filtred={setFilterTrigger} allFilters={filteredBy} setAll={setFilteredBy} />
            <div className="product-grid">
              {productFiltered.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={handleProductClick}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Women;
