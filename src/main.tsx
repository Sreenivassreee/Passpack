import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/HomePage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
          <Route path="/:userId" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
