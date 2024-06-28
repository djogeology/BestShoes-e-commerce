// Women.js
import React from 'react';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import './CategoryPage.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Women = () => {
  const [products,setProducts]=useState([]);
  const [productFiltred,setProductFiltred]=useState([]);
  const [filtredBy,setFiltredBy]=useState([]);
  const [filterTrigger,setFilterTrigger]=useState();
  useEffect(()=>{
  axios.get('http://localhost:3000/api/products/category/Women')
  .then(response=>{
  setProducts(response.data)
  setProductFiltred(response.data)
  })
  .catch(err=>{
    console.log(err);
  })
},[])
  useEffect(() => {
    if (filterTrigger) {
        setFiltredBy((prevFilters) => [...prevFilters, filterTrigger]);
    }
}, [filterTrigger]);
useEffect(() => {
  if (!filtredBy || filtredBy.length===0) {
    setProductFiltred(products);
  } else {
    const RecFilter = function(filters, i = 0, data = products) {
      if (i === filters.length) {
        return data;
      }
    
      let key = Object.keys(filters[i])[0];
      let value = filters[i][key];
      if(key==="size"){
        let filteredProducts = data.filter(product => {
          return product[key].includes(+value);
        });
        data = filteredProducts;
        return RecFilter(filters, i + 1, data);
      }
      else{
        let filteredProducts = data.filter(product => {
          return product[key]===(+value);
        });
        data = filteredProducts;
        return RecFilter(filters, i + 1, data);
      }
    };
    
    setProductFiltred(RecFilter(filtredBy))
    

  }
}, [filtredBy, products]);
  return (
    <div className="category-page">
      <h1>Women's High Heels</h1>
      <div className="category-content">
        <Sidebar filtred={setFilterTrigger}/>
        <div className="product-grid">
          {productFiltred.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
