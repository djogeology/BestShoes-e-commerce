// HomePage.js
import React from 'react';
import CategoryCarousel from './categoryCarousel';
import './HomePage.css';
import img1 from '../images/men1.jpg';
import img2 from '../images/men2.jpg';
import img3 from '../images/men3.jpg';
import img4 from '../images/men4.jpg';
import img6 from '../images/men6.jpg';
import img5 from '../images/men5.jpg';
import img7 from '../images/men7.jpg';
import wom1 from '../images/women1.jpg';
import wom2 from '../images/women2.jpg';
import wom3 from '../images/women3.jpg';
import wom4 from '../images/women4.jpg';
import wom5 from '../images/women5.jpg';
import wom6 from '../images/women6.jpg';
import wom7 from '../images/women7.jpg';
import kid1 from '../images/kids1.jpg';
import kid2 from '../images/kids2.jpg';
import kid3 from '../images/kids3.jpg';
import kid4 from '../images/kids4.jpg';
import kid5 from '../images/kids5.jpg';
import kid6 from '../images/kids6.jpg';
import new1 from '../images/new1.jpg';
import new2 from '../images/new2.jpg';
import new3 from '../images/new3.jpg';
import new4 from '../images/new4.jpg';
import new5 from '../images/new5.jpg';






const categories = {
  men: [
    img1, img2, img3,img4,img5,img6,img7
  ],
  women: [
    wom1,wom2,   wom3,   wom4, wom5, wom6, wom7
    ],
  kids: [
    kid1,kid2,kid3,kid4,kid5,kid6
  ],
  'Sale Up to 50%': [
    'https://hips.hearstapps.com/hmg-prod/images/mh-10-20-on-running-1666277273.png?crop=0.502xw:1.00xh;0,0&resize=640:*',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-discount-sale-video-ads-design-template-5b8bd6b5421a0f223fef251a21fb41e9_screen.jpg?ts=1681109963',
    'https://www.shutterstock.com/image-vector/special-offer-banner-260nw-1012049569.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Shoes/April/SportsShoes_Sale/prabub_2017-04-18T10-47_29518d_adidas._V529171826_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEi3s1pxs8lpiD6Q_Qlkn10aGpfC_ZqmZ6yg&s',
  ],
  'New Arrivals Exclusives': [
  new1,new2,new3,new4,new5
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
