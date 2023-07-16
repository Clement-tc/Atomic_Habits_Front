import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Test from './Test.tsx'
import './index.css'
import { AuthProvider } from './context/AuthProvider.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
