import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; 

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError('All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Your sign-up logic here (e.g., API call for registration)
    // Example:
    // if (email && password === confirmPassword) {
    //   // Call API to register
    //   navigate('/login');
    // } else {
    //   setError('An error occurred. Please try again.');
    // }

    // If successful:
    setError('');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-heading">Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignUp} className="auth-form">
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
          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="auth-input"
            />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <div className="auth-footer">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
