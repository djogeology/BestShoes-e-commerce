import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [expandSections, setExpandSections] = useState({
    size: false,
    brand: false,
    color: false,
    price: false,
    style: false,
  });

  const handleExpand = (section) => {
    setExpandSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="sidebar">
      <div className="section">
        <h3 onClick={() => handleExpand('size')}>Men Size</h3>
        {expandSections.size && (
          <div className="options">
            {['7', '8', '9', '10', '11'].map((size) => (
              <div key={size}>
                <input type="checkbox" id={`size-${size}`} />
                <label htmlFor={`size-${size}`}>{size}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="section">
        <h3 onClick={() => handleExpand('brand')}>Brand</h3>
        {expandSections.brand && (
          <div className="options">
            {['Nike', 'Adidas', 'Puma', 'Reebok', 'Under Armour'].map((brand) => (
              <div key={brand}>
                <input type="checkbox" id={`brand-${brand}`} />
                <label htmlFor={`brand-${brand}`}>{brand}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="section">
        <h3 onClick={() => handleExpand('color')}>Color</h3>
        {expandSections.color && (
          <div className="options">
            {['Black', 'White', 'Red', 'Blue', 'Green'].map((color) => (
              <div key={color}>
                <input type="checkbox" id={`color-${color}`} />
                <label htmlFor={`color-${color}`}>{color}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="section">
        <h3 onClick={() => handleExpand('price')}>Price</h3>
        {expandSections.price && (
          <div className="options">
            {['$0-$50', '$51-$100', '$101-$150', '$151-$200', '$201+'].map((price) => (
              <div key={price}>
                <input type="checkbox" id={`price-${price}`} />
                <label htmlFor={`price-${price}`}>{price}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="section">
        <h3 onClick={() => handleExpand('style')}>Shoe Style</h3>
        {expandSections.style && (
          <div className="options">
            {['Sneakers', 'Boots', 'Sandals', 'Loafers', 'Formal'].map((style) => (
              <div key={style}>
                <input type="checkbox" id={`style-${style}`} />
                <label htmlFor={`style-${style}`}>{style}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
