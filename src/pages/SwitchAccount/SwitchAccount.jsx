import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SwitchAccount.css';

const SwitchAccount = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  });
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://www.w3schools.com/howto/img_avatar2.png' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
  ]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAllAccounts, setShowAllAccounts] = useState(false);

  const handleSwitchAccount = (account) => {
    setSelectedAccount(account);
    setCurrentUser(account);
    setIsDropdownOpen(false); // Close dropdown after switching account
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    navigate('/login'); // Redirect to login page
  };

  const handleAddAccount = () => {
    navigate('/login'); // Redirect to login page for adding a new account
  };

  const handleViewAllChannels = () => {
    setShowAllAccounts(!showAllAccounts); // Toggle view all accounts
  };

  return (
    <div className="switch-account-container">
      <h2>Switch Account</h2>
      {/* Displaying the current user's profile info */}
      <div className="current-account">
        <p>Current Account:</p>
        <div className="current-account-info">
          <div className="account-avatar">
            <img src={currentUser.avatar} alt={`${currentUser.name} avatar`} />
          </div>
          <div className="account-info">
            <h3>{currentUser.name}</h3>
            <p>{currentUser.email}</p>
          </div>
        </div>
      </div>

      {/* Switch Account button */}
      <button className="switch-account-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        Switch Account
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          {/* View All Channels button */}
          <button className="dropdown-button" onClick={handleViewAllChannels}>
            {showAllAccounts ? 'Hide All Channels' : 'View All Channels'}
          </button>

          {/* Display other accounts if "View All Channels" is clicked */}
          {showAllAccounts && (
            <div className="accounts-list">
              {accounts
                .filter(account => account.id !== currentUser.id) // Exclude the current user from the list
                .map(account => (
                  <div
                    key={account.id}
                    className={`account-item ${selectedAccount?.id === account.id ? 'selected' : ''}`}
                    onClick={() => handleSwitchAccount(account)}
                  >
                    <div className="account-avatar">
                      <img src={account.avatar} alt={`${account.name} avatar`} />
                    </div>
                    <div className="account-info">
                      <h3>{account.name}</h3>
                      <p>{account.email}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Add Account and Sign Out buttons */}
          <button className="dropdown-button" onClick={handleAddAccount}>Add Account</button>
          <button className="dropdown-button" onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default SwitchAccount;
