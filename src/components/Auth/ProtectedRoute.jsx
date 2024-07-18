import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assurez-vous que le chemin est correct

const ProtectedRoute = ({ element }) => {
    const { token } = useAuth(); // Utilisez le hook pour obtenir le token

    // Vérifiez si le token existe pour déterminer si l'utilisateur est authentifié
    return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
