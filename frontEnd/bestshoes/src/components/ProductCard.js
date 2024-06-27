// ProductCard.js
import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  const mainImage = product.images[0];
  const variationImages = product.images.slice(1);

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
          {variationImages.slice(0, 4).map((image, index) => (
            <img key={index} src={image} alt="variation" className="product-variation" />
          ))}
          {variationImages.length > 4 && <span className="more-variations">+{variationImages.length - 4}</span>}
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-color">{product.color}</p>
        <p className="product-price">{product.price}</p>
        {product.salePrice && <p className="product-sale-price">Sale: {product.salePrice}</p>}
      </div>
    </div>
  );
};


export default ProductCard;
