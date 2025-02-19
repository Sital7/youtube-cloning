import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Both fields are required!');
      return;
    }

    // Your login logic here (authentication, API call, etc.)
    // Example:
    // if (email === 'user@example.com' && password === 'password123') {
    //   navigate('/');
    // } else {
    //   setError('Invalid email or password.');
    // }
    
    // Assuming login is successful:
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-heading">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin} className="auth-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="auth-input"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="auth-input"
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <div className="auth-footer">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
