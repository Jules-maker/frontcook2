import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const AuthContext = createContext();

// Provider du contexte
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    };

    const logout = () => {
        setToken('');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook pour utiliser le contexte
export const useAuth = () => useContext(AuthContext);

// Export du contexte pour utilisation directe si nécessaire
export { AuthContext };
