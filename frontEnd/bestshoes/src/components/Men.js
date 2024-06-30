// Men.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import Sidebar from './Sidebar';
import './CategoryPage.css';

const Men = ({onAddToCart}) => {
  const [products, setProducts] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [filteredBy, setFilteredBy] = useState([]);
  const [filterTrigger, setFilterTrigger] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products/category/Men')
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
      setFilteredBy((prevFilters) => [...prevFilters, filterTrigger]);
    }
  }, [filterTrigger]);

  useEffect(() => {
    if (!filteredBy || filteredBy.length === 0) {
      setProductFiltered(products);
    } else {
      const RecFilter = function (filters, i = 0, data = products) {
        if (i === filters.length) {
          return data;
        }

        let key = Object.keys(filters[i])[0];
        let value = filters[i][key];
        if (key === "size") {
          let filteredProducts = data.filter(product => {
            return product[key].includes(+value);
          });
          data = filteredProducts;
          return RecFilter(filters, i + 1, data);
        }
        else {
          let filteredProducts = data.filter(product => {
            return product[key] === (+value);
          });
          data = filteredProducts;
          return RecFilter(filters, i + 1, data);
        }
      };

      setProductFiltered(RecFilter(filteredBy));
    }
  }, [filteredBy, products]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };
  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <div className="category-page">
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} onBack={handleBack} onAddToCart={handleAddToCart}/>
      ) : (
        <>
          <h1>Men's Shoes</h1>
          <div className="category-content">
            <Sidebar filtred={setFilterTrigger} />
            <div className="product-grid">
              {productFiltered.map((product) => (
                <ProductCard key={product.id} product={product} onProductClick={handleProductClick} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Men;
