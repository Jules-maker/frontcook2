import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import './assets/css/index.scss';
import { AuthProvider } from './components/Auth/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>,
);
