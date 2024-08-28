import React from 'react'
import { EmpresasRegistradas } from './pages/empresasRegistradas/empresasRegistradas.jsx'
import LayoutDashboard from './layouts/LayoutDashboard.jsx'

function App() {

  return (
    <LayoutDashboard>
      <EmpresasRegistradas />
    </LayoutDashboard>
  )
}

export default App
