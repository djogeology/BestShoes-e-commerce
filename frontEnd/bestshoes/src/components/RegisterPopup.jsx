import React, { useState } from 'react';
import './RegisterPopup.css';
import axios from 'axios';


const RegisterPopup = ({ onClose, onSuccess }) => {
  const [form, setForm] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    image: ''
  });

  const [errors, setErrors] = useState({
    fullname: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleRegister = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      saveToDb();
      onSuccess();
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.fullname) newErrors.fullname = 'Please enter your fullname';
    if (!form.username) newErrors.username = 'Please enter your username';
    if (!form.email) newErrors.email = 'Please enter your email in this format: name@company.com';
    if (!form.password) newErrors.password = 'Enter a valid password';
    return newErrors;
  };

  const saveToDb = () => {
    axios.post("http://localhost:3000/api/users", form)
      .then(response => { console.log(response.data) })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="register-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Create Account</h2>
        <div className="form-group">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name *"
            value={form.fullname}
            onChange={handleChange}
            required
          />
          {errors.fullname && <p className="error-message">{errors.fullname}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username *"
            value={form.username}
            onChange={handleChange}
            required
          />
          {errors.username && <p className="error-message">{errors.username}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password *"
            value={form.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <p>
          By clicking "Continue", you agree to the Bestshoes Membership Terms & Conditions and acknowledge you read the Privacy Statement.
        </p>
        <button onClick={handleRegister} className="register-btn">Continue</button>
      </div>
    </div>
  );
};

export default RegisterPopup;
