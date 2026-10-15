import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Primeirapag from './pages/primeirapag/App';
import Segundapag from './pages/segundapag';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Primeirapag />} />
        <Route path="/segunda" element={<Segundapag />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


