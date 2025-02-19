import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSaveSettings = (e) => {
    e.preventDefault();

    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-container">
      <div className="settings-box">
        <h2>Account Settings</h2>
        <p>Manage your account settings below.</p>

        <form onSubmit={handleSaveSettings} className="settings-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="settings-input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="settings-input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="settings-input"
            />
          </div>

          <button type="submit" className="settings-button">Save Settings</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
