import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import SignUp from './pages/SignUpPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import LandingPage from './pages/LandingPage.tsx';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage/>}/>
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