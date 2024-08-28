import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
