import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import './CategoryPage.css';
import axios from 'axios';

const Men = () => {
  const [products, setProducts] = useState([]);
  const [productFiltred, setProductFiltred] = useState([]);
  const [filtredBy, setFiltredBy] = useState([]);
  const [filterTrigger, setFilterTrigger] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products/category/Men')
      .then(response => {
        setProducts(response.data);
        setProductFiltred(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (filterTrigger) {
      setFiltredBy((prevFilters) => [...prevFilters, filterTrigger]);
    }
  }, [filterTrigger]);

  useEffect(() => {
    if (filtredBy.length === 0) {
      setProductFiltred(products);
    } else {
      const RecFilter = function (filters, i = 0, data = products) {
        if (i === filters.length) {
          return data;
        }

        let key = Object.keys(filters[i])[0];
        let value = filters[i][key];
        if (key === "size") {

          data = data.filter(product => product[key].includes(+value));
        } 
        else if(key === "price"){
          data = data.filter(product => extractNumbers(value)[0] <= parseFloat(product[key].replace(/[^0-9.-]+/g,"")) && parseFloat(product[key].replace(/[^0-9.-]+/g,"")) <= extractNumbers(value)[1] );
        }
        else {
          data = data.filter(product => product[key] === +value);
          console.log(data)
        }
        return RecFilter(filters, i + 1, data);
      };

      setProductFiltred(RecFilter(filtredBy));
    }
  }, [filtredBy, products]);
  function extractNumbers(range) {
    // Use a regular expression to find all numeric values in the string
    const numbers = range.match(/\d+/g);
    // Convert the array of strings to an array of numbers
    return numbers ? numbers.map(Number) : [];
  }

  return (
    <div className="category-page">
      <h1>Men's Shoes</h1>
      <div className="category-content">
        <Sidebar filtred={setFilterTrigger} allFilters={filtredBy} setAll={setFiltredBy} />
        <div className="product-grid">
          {productFiltred.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Men;
