// AuthContext.js
import { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false); // false means not authenticated

  // Function to log in (mock authentication)
  const login = () => setAuth(true);
  
  // Function to log out
  const logout = () => setAuth(false);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
