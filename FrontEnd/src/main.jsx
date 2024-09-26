import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './App.jsx'
import './index.css'
import Preloader from './components/preloader/preloader.jsx'


createRoot(document.getElementById('root')).render(

  <Suspense fallback={<Preloader />}>
    <StrictMode>
      <AppRoutes />
    </StrictMode>
  </Suspense>

)
