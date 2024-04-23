import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        console.log('Username:', username);
        console.log('Password:', password);
    };


  return (
      <div>
        <h1>Login</h1>
          <div>
              <label>Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleLogin}>Login</button>
      </div>
  );
}

export default App;
