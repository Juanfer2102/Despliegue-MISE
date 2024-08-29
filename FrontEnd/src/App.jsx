// src/AppRoutes.js

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importa PropTypes

// Componentes de autenticación
import Login from "./pages/login/login.jsx";
import Olvidastecontra from "./pages/olvidasteContraseña/olvidasteContraseña.jsx";
import Rescribircontrase from "./pages/olvidasteContraseña/reescribirContraseña.jsx";
import Correofallido from "./pages/olvidasteContraseña/correoFallido.jsx";
import Expirado from "./pages/olvidasteContraseña/expiracion.jsx";
import Credencial from "./pages/olvidasteContraseña/credenciales.jsx";

// Componentes de registro
import Registro from "./pages/registropostu/registro.jsx";
import RegistroEmpresa from "./pages/registroEmpresa/registroEmpresa.jsx";
import NuevoUser from "./pages/nuevoUser/nuevoUser.jsx";

// Dashboard y componentes principales
import Dashboard from "./pages/dashboard/dashboard";

// Componentes de edición
import EditarPorcentaje from "./pages/editarPorcentajeDesarr/editarPorcentaje.jsx";
import EditarUsuario from "./pages/editarUsuario/editarUsuario.jsx";

// Componentes de usuarios
import VerUsers from "./pages/visualizarUsers.jsx";
import { EmpresasRegistradas } from "./pages/empresasRegistradas/empresasRegistradas";

// Componentes de módulos
import Modulos from "./pages/modulos/modulos.jsx";
import Nuevomodulo from "./pages/modulos/nuevomodulo.jsx";
import Editarmodulos from "./pages/modulos/editarmodulos.jsx";

// Componentes de sueños
import Sueos from "./pages/sueños/sueños.jsx";
import NuevoSueo from "./pages/sueños/nuevosueño.jsx";
import Editarsueos from "./pages/sueños/editarSueños.jsx";

// Componentes de preguntas
import Preguntas from "./pages/preguntas/preguntas.jsx";
import NuevaPregunta from "./pages/preguntas/nuevapregunta.jsx";
import Editarpreguntas from "./pages/preguntas/editarpreguntas.jsx";

// Componentes de talleres
import Talleres from "./pages/talleres/talleres.jsx";

// Otros componentes
import AceptarEmpresas from "./pages/aceptarEmpresas/aceptaremp";
import Autoevaluacion from "./pages/autoevaluacion/autoevaluacion.jsx";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const role = userData ? userData.id_rol : null;

  return allowedRoles.includes(role) ? children : <Navigate to="/" />;
};

// Definir las propTypes para ProtectedRoute
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas sin protección */}
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registro-empresa" element={<RegistroEmpresa />} />
        <Route path="/nuevo-usuario" element={<NuevoUser />} />

        {/* Rutas protegidas */}
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/olvidaste-contraseña" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Olvidastecontra />
          </ProtectedRoute>
        } />
        <Route path="/reescribir-contraseña" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Rescribircontrase />
          </ProtectedRoute>
        } />
        <Route path="/correo-fallido" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Correofallido />
          </ProtectedRoute>
        } />
        <Route path="/expiracion" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Expirado />
          </ProtectedRoute>
        } />
        <Route path="/credenciales" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Credencial />
          </ProtectedRoute>
        } />
        <Route path="/editar-porcentaje" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <EditarPorcentaje />
          </ProtectedRoute>
        } />
        <Route path="/editar-usuario" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <EditarUsuario />
          </ProtectedRoute>
        } />
        <Route path="/visualizar-users" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <VerUsers />
          </ProtectedRoute>
        } />
        <Route path="/empresas-registradas" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <EmpresasRegistradas />
          </ProtectedRoute>
        } />
        <Route path="/modulos" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Modulos />
          </ProtectedRoute>
        } />
        <Route path="/nuevo-modulo" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Nuevomodulo />
          </ProtectedRoute>
        } />
        <Route path="/sueños" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Sueos />
          </ProtectedRoute>
        } />
        <Route path="/nuevo-sueño" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <NuevoSueo />
          </ProtectedRoute>
        } />
        <Route path="/editar-modulos" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Editarmodulos />
          </ProtectedRoute>
        } />
        <Route path="/editar-sueños" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Editarsueos />
          </ProtectedRoute>
        } />
        <Route path="/editar-preguntas" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Editarpreguntas />
          </ProtectedRoute>
        } />
        <Route path="/preguntas" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Preguntas />
          </ProtectedRoute>
        } />
        <Route path="/nueva-pregunta" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <NuevaPregunta />
          </ProtectedRoute>
        } />
        <Route path="/talleres" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Talleres />
          </ProtectedRoute>
        } />
        <Route path="/aceptar-empresas" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <AceptarEmpresas />
          </ProtectedRoute>
        } />
        <Route path="/autoevaluacion" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <Autoevaluacion />
          </ProtectedRoute>
        } />
        <Route path="/nuevo-user" element={
          <ProtectedRoute allowedRoles={[1, 2, 3]}>
            <NuevoUser />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
