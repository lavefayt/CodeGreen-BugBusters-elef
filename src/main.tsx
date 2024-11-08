import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root'); 
if (rootElement) {
  const root = createRoot(rootElement); 
  root.render(
    <StrictMode>
      <Main />
    </StrictMode>
  );
}