import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css'; // Optional for custom styles

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const correctUsername = 'admin';
    const correctPassword = 'admin@123';

    // Check if the entered credentials are correct
    if (username === correctUsername && password === correctPassword) {
      // Redirect to another page (e.g., Dashboard)
      navigate('/admin/*');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center">Administration</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
          {/* <a href="/" className="d-block text-center mt-3">Forgotten Password</a> */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
