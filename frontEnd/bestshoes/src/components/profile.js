
import React, { useState } from 'react';
import axios from 'axios';

const Profile = ({ user, updateUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleUpdate = () => {
    updateUser(updatedUser);
    setEditMode(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.image} alt="User" className="profile-image" />
        <h2>{user.username}</h2>
      </div>
      <div className="profile-details">
        {editMode ? (
          <div className="edit-form">
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={updatedUser.username}
                onChange={handleChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={updatedUser.Adress}
                onChange={handleChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={updatedUser.password}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={updatedUser.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleUpdate}>Update Information</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        ) : (
          <div className="view-mode">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={() => setEditMode(true)}>Edit Information</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
