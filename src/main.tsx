import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/HomePage';
import { LoginHome } from './components/LoginHome';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <LoginHome/>

  </React.StrictMode>,
)
