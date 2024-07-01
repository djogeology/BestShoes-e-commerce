import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import axios from 'axios';

const Sidebar = ({ filtred, allFilters, setAll }) => {
  const [brands, setBrands] = useState([]);
  const [styles, setStyles] = useState([]);
  const [expandSections, setExpandSections] = useState({
    size: false,
    brand: false,
    color: false,
    price: false,
    style: false,
  });

  useEffect(() => {
    axios.get("http://localhost:3000/api/brands")
      .then(response => {
        setBrands(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/api/styles")
      .then(response => {
        setStyles(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleExpand = (section) => {
    setExpandSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCheckboxChange = function (event) {
    if (event.target.checked) {
      filtred({ [event.target.id]: event.target.value });
    } else {
      const updatedItems = allFilters.filter(
        item => !(item[event.target.id] === event.target.value)
      );
      setAll(updatedItems);
    }
  };

  return (
    <div className="sidebar">
      <div className="section">
        <h3 onClick={() => handleExpand('size')}>Size</h3>
        {expandSections.size && (
          <div className="options">
            {['35', '40', '34', '36', '37'].map((size) => (
              <div key={size}>
                <input
                  type="checkbox"
                  id="size"
                  value={`${size}`}
                  onChange={handleCheckboxChange}
                />
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
            {brands.map((brand) => (
              <div key={brand.id}>
                <input
                  type="checkbox"
                  id="brand_id"
                  value={`${brand.id}`}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`brand-${brand.id}`}>{brand.name}</label>
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
                <input
                  type="checkbox"
                  id="price"
                  value={price}
                  onChange={handleCheckboxChange}
                />
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
            {styles.map((style) => (
              <div key={style.id}>
                <input
                  type="checkbox"
                  id="style_id"
                  value={`${style.id}`}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`style-${style.id}`}>{style.name}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
