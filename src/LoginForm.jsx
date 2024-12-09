import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      onLogin(true, true); 
    } else if (username === 'user' && password === 'user') {
      onLogin(true, false); 
    } else {
      onLogin(false, false); 
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(value) => setUsername(value.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(value) => setPassword(value.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;