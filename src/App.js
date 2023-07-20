// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import ProfilePage from './components/ProfilePage';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* Redirect to login page by default */}
          <Route path="/" element={<Navigate to="/profile" />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;