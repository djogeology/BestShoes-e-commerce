import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails'; // Assuming ProductDetails is a component for showing details
import Sidebar from './Sidebar'; // Assuming Sidebar is a component for filtering
import './CategoryPage.css';

const OnSale = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filtredBy, setFiltredBy] = useState([]);
  const [filterTrigger, setFilterTrigger] = useState(false);

  useEffect(() => {
    const fetchOnSaleProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products?maxQuantity=10');
        // Filter products with quantity less than 10
        const filteredProducts = response.data.filter(product => product.quantity < 10);
        setProducts(filteredProducts);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOnSaleProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  
  const handleBack = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="category-page">
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} onBack={handleBack} onAddToCart={onAddToCart} />
      ) : (
        <>
          <h1>On Sale Products</h1>
          <div className="category-content">
            <Sidebar filtred={setFilterTrigger} allFilters={filtredBy} setAll={setFiltredBy}/>
            <div className="product-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} onProductClick={handleProductClick} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OnSale;
