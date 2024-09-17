// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  // If the user is not authenticated, redirect to login
  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
