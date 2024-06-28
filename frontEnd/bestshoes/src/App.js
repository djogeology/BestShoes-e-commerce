import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import OnSale from './components/OnSale';
import New from './components/New';
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';
import RegisterPopup from './components/RegisterPopup';
import Cart from './components/cart';
import SVGIcon from "./components/SVGIcon"
import Profile from "./components/profile"
import './App.css';
// Example product data
const productData = {
  men: [
    {
      name: 'Nike Dunk Low',
      category: 'Men Shoes',
      color: 'White - Grey Fog',
      price: '£109.99',
      isFavorite: false,
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8aa6d9ab-ac50-44e8-a8d1-cf315304b782/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a0fc185-f9d9-4046-8804-adebf3f345a5/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/854c9504-312a-46ec-ad9a-4fb8d191f5e4/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bf827ee4-5566-4147-9077-35d848971e2a/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d792d565-20d2-42b7-8d1e-cb966cfab2f4/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png',
      ],
    },   
    {
      name: 'Nike Dunk Low',
      category: 'Men Shoes',
      color: 'White - Grey Fog',
      price: '£109.99',
      isFavorite: false,
      images: [
        'link_to_nike_dunk_low_main_image',
        'link_to_nike_dunk_low_variation_image1',
        'link_to_nike_dunk_low_variation_image2',
        'link_to_nike_dunk_low_variation_image3',
        'link_to_nike_dunk_low_variation_image4',
      ],
    },  ],
  women: [
    {
      name: 'Nike Dunk Low',
      category: 'Men Shoes',
      color: 'White - Grey Fog',
      price: '£109.99',
      isFavorite: false,
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8aa6d9ab-ac50-44e8-a8d1-cf315304b782/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a0fc185-f9d9-4046-8804-adebf3f345a5/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/854c9504-312a-46ec-ad9a-4fb8d191f5e4/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bf827ee4-5566-4147-9077-35d848971e2a/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d792d565-20d2-42b7-8d1e-cb966cfab2f4/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png',
      ],
    },   
    {
      name: 'Nike Dunk Low',
      category: 'Men Shoes',
      color: 'White - Grey Fog',
      price: '£109.99',
      isFavorite: false,
      images: [
        'link_to_nike_dunk_low_main_image',
        'link_to_nike_dunk_low_variation_image1',
        'link_to_nike_dunk_low_variation_image2',
        'link_to_nike_dunk_low_variation_image3',
        'link_to_nike_dunk_low_variation_image4',
      ],
    },  ],
  kids: [
    {
      name: 'Nike Dunk Low',
      category: 'Men Shoes',
      color: 'White - Grey Fog',
      price: '£109.99',
      isFavorite: false,
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8aa6d9ab-ac50-44e8-a8d1-cf315304b782/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a0fc185-f9d9-4046-8804-adebf3f345a5/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/854c9504-312a-46ec-ad9a-4fb8d191f5e4/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bf827ee4-5566-4147-9077-35d848971e2a/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d792d565-20d2-42b7-8d1e-cb966cfab2f4/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png',
      ],
    },   
    {
      name: 'Nike Dunk Low',
      category: 'Men Shoes',
      color: 'White - Grey Fog',
      price: '£109.99',
      isFavorite: false,
      images: [
        'link_to_nike_dunk_low_main_image',
        'link_to_nike_dunk_low_variation_image1',
        'link_to_nike_dunk_low_variation_image2',
        'link_to_nike_dunk_low_variation_image3',
        'link_to_nike_dunk_low_variation_image4',
      ],
    },  ],
  onSale: [
    {
      name: 'Nike Dunk Low',
      category: 'Men Shoes',
      color: 'White - Grey Fog',
      price: '£109.99',
      isFavorite: false,
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8aa6d9ab-ac50-44e8-a8d1-cf315304b782/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a0fc185-f9d9-4046-8804-adebf3f345a5/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/854c9504-312a-46ec-ad9a-4fb8d191f5e4/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bf827ee4-5566-4147-9077-35d848971e2a/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d792d565-20d2-42b7-8d1e-cb966cfab2f4/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png',
      ],
    },   
    {
      name: 'Nike Dunk Low',
      category: 'Men Shoes',
      color: 'White - Grey Fog',
      price: '£109.99',
      isFavorite: false,
      images: [
        'link_to_nike_dunk_low_main_image',
        'link_to_nike_dunk_low_variation_image1',
        'link_to_nike_dunk_low_variation_image2',
        'link_to_nike_dunk_low_variation_image3',
        'link_to_nike_dunk_low_variation_image4',
      ],
    },  ],
  new: [
    {
      name: 'Nike Dunk Low',
      category: 'Men Shoes',
      color: 'White - Grey Fog',
      price: '£109.99',
      isFavorite: false,
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8aa6d9ab-ac50-44e8-a8d1-cf315304b782/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a0fc185-f9d9-4046-8804-adebf3f345a5/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/854c9504-312a-46ec-ad9a-4fb8d191f5e4/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bf827ee4-5566-4147-9077-35d848971e2a/air-jordan-13-retro-dune-red-mens-shoes-sGwKd5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d792d565-20d2-42b7-8d1e-cb966cfab2f4/air-jordan-1-high-85-metallic-burgundy-shoes-QCCSvs.png',
      ],
    },   
    {
      name: 'Nike Dunk Low',
      category: 'Men Shoes',
      color: 'White - Grey Fog',
      price: '£109.99',
      isFavorite: false,
      images: [
        'link_to_nike_dunk_low_main_image',
        'link_to_nike_dunk_low_variation_image1',
        'link_to_nike_dunk_low_variation_image2',
        'link_to_nike_dunk_low_variation_image3',
        'link_to_nike_dunk_low_variation_image4',
      ],
    },  ],
};

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null); // user//
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Dropdown visibility state
  const initialCartItems = [
    {
      id: 1,
      name: 'Nike Dunk Low',
      price: 109.99,
      image: 'https://your-image-url.com/nike-dunk-low.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'New Balance 9060',
      price: 159.99,
      image: 'https://your-image-url.com/new-balance-9060.jpg',
      quantity: 2,
    },
  ];
  const [cartItems, setCartItems] = useState(initialCartItems); //cartitems//
//*signin signup//
  const handleLoginClick = () => setIsLoginOpen(true);
  const handleRegisterClick = () => setIsRegisterOpen(true);

  const handleClosePopup = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoginOpen(false);
    setCurrentView('home');
  };

  const handleRegisterSuccess = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
    setCurrentView('home');
  };

  const renderView = () => {
    switch (currentView) {
      case 'men':
        return <Men products={productData.men} />;
      case 'women':
        return <Women products={productData.women} />;
      case 'kids':
        return <Kids products={productData.kids} />;
      case 'on-sale':
        return <OnSale products={productData.onSale} />;
      case 'new':
        return <New products={productData.new} />;
        case 'cart':
        return <Cart cartItems={cartItems} setCartItems={setCartItems} initialCartItems={initialCartItems}/>;
        case 'Profile':
        return <Profile user={user} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo" onClick={() => setCurrentView('home')}>BestShoes</div>
        <div className="search-bar">
          <div className="input-container">
            <input type="text" className="input-box" placeholder="Enter text here..." />
          </div>
        </div>
        <nav className="nav">
          <button onClick={() => setCurrentView('men')}>Men</button>
          <button onClick={() => setCurrentView('women')}>Women</button>
          <button onClick={() => setCurrentView('kids')}>Kids</button>
          <button onClick={() => setCurrentView('on-sale')}>On Sale</button>
          <button onClick={() => setCurrentView('new')}>New</button>
        </nav>
        <div className="header-icons">
          {user ? (
            <div className="user-menu">
              <img src={user.image} alt="User" className="user-image" />
              <div className="sign-in">{user.username}</div>
              <div className="menu" onClick={handleDropdownToggle}>
                <SVGIcon />
              </div>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={() => setCurrentView('Profile')}>
                    Profile
                  </button>
                  <button onClick={() => setCurrentView('orders')}>
                    Orders
                  </button>
                  <button onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="sign-in" onClick={handleLoginClick}>Sign In</div>
          )}
          <div className="cart-icon" onClick={()=>setCurrentView('cart')}>🛒</div>
        </div>
      </header>
      {renderView()}
      <Footer />
      {isLoginOpen && (
        <LoginPopup
          onClose={handleClosePopup}
          onSuccess={handleLoginSuccess}
          onRegisterClick={handleRegisterClick}
          LogonUser={setUser}
        />
      )}
      {isRegisterOpen && (
        <RegisterPopup
          onClose={handleClosePopup}
          onSuccess={handleRegisterSuccess}
        />
      )}
    </div>
  );
};

export default App;
