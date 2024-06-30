// ProductCard.js
import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, onProductClick }) => {
  const mainImage = product.image[0];
  const variationImages = product.image.slice(1);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={mainImage} alt={product.name} className="product-image" />
        <div className="product-favorite">
          <FontAwesomeIcon icon={product.isFavorite ? faHeartSolid : faHeart} />
        </div>
      </div>
      <div className="product-info">
        <div className="product-variations">
          {variationImages.slice(0, 10).map((image, index) => (
            <img key={index} src={image} alt="variation" className="product-variation" />
          ))}
          {variationImages.length > 4 && <span className="more-variations">+{variationImages.length - 4}</span>}
        </div>
        <h3 className="product-name" onClick={() => onProductClick(product)}>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
