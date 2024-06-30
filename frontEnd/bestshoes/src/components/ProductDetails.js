// ProductDetails.js
import React, { useState } from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, onBack, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(product.image[0]);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="product-details">
      <div className="details-content">
        <div className="product-images">
          <img src={selectedImage} alt={product.name} className="big-image" />
          <div className="thumbnail-images">
            {product.image.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name}-${index}`}
                className="thumbnail"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Colors:</strong> </p>
          <div className="sizes">
            <strong>Sizes:</strong>
            <div className="size-options">
              {product.size.map((size) => (
                <label key={size} className="size-label">
                  <input
                    type="checkbox"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={() => setSelectedSize(size)}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>
          <button className="back-btn" onClick={onBack}>Back</button>
          <button
            onClick={() => onAddToCart({ ...product, selectedSize })}
            className="add-to-cart-button"
            disabled={!selectedSize}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
