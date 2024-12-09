import React, { useState } from 'react';
import LoginForm from './LoginForm';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import ErrorMessage from './ErrorMessage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleLogin(isLoggedIn, isAdmin) {
    setIsLoggedIn(isLoggedIn);
    setIsAdmin(isAdmin);
    setShowError(!isLoggedIn);
  }

  return (
    <div>
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : isAdmin ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
      {showError && <ErrorMessage />}
    </div>
  );
}

export default App;