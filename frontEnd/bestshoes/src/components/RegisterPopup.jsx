import React, { useState } from 'react';
import './RegisterPopup.css';
import axios from 'axios' ;


const RegisterPopup = ({ onClose, onSuccess }) => {
  const [form, setForm] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    Adress: '',
    phone: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleRegister = () => {
    saveToDb();
    onSuccess();
  };
  const saveToDb= function(){
    axios.post("http://localhost:3000/api/users",form)
    .then(response=>{console.log(response.data)})
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className="register-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Create Account</h2>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Adress"
          placeholder="Adress"
          value={form.Adress}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          required
        />
        <label>
          <input type="checkbox" name="emailConsent" /> Yes, I want to receive emails from Bestshoes Membership with exclusive offers and rewards.
        </label>
        <label>
          <input type="checkbox" name="footLockerEmails" /> Yes, I want to subscribe to Bestshoes emails about new arrivals, sale campaigns and seasonal products.
        </label>
        <p>
          By clicking "Continue", you agree to the Bestshoes Membership Terms & Conditions and acknowledge you read the Privacy Statement.
        </p>
        <button onClick={handleRegister} className="register-btn">Continue</button>
      </div>
    </div>
  );
};

export default RegisterPopup;
