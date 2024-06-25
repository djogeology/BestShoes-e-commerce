// HomePage.js
import React from 'react';
import CategoryCarousel from './categoryCarousel';
import './HomePage.css';
import img1 from '../images/men1.jpg';
import img2 from '../images/men2.jpg';
import img3 from '../images/men3.jpg';
import img4 from '../images/men4.jpg'

const categories = {
  men: [
    img1,
    img2,
    img3,
    img4,
  ],
  women: [
    'path/to/womens-high-heels1.jpg',
    'path/to/womens-high-heels2.jpg',
    'path/to/womens-high-heels3.jpg',
    'path/to/womens-high-heels4.jpg',
  ],
  kids: [
    'path/to/kids-shoes1.jpg',
    'path/to/kids-shoes2.jpg',
    'path/to/kids-shoes3.jpg',
    'path/to/kids-shoes4.jpg',
  ],
  'on-sale': [
    'path/to/on-sale1.jpg',
    'path/to/on-sale2.jpg',
    'path/to/on-sale3.jpg',
    'path/to/on-sale4.jpg',
  ],
  new: [
    'path/to/new-arrivals1.jpg',
    'path/to/new-arrivals2.jpg',
    'path/to/new-arrivals3.jpg',
    'path/to/new-arrivals4.jpg',
  ],
};

const HomePage = () => {
  return (
    <div className="home-page">
      {Object.keys(categories).map((cat, index) => (
        <div key={index} className="category">
          <h2>{cat.replace('-', ' ')}</h2>
          <CategoryCarousel images={categories[cat]} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
