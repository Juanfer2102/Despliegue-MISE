// src/AppRoutes.js
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importa PropTypes
import Preloader from './components/preloader/preloader.jsx';

// Componentes de autenticación
const Login = lazy(() => import("./pages/login/login.jsx"));
const Olvidastecontra = lazy(() => import("./pages/olvidasteContraseña/olvidasteContraseña.jsx"));
const Rescribircontrase = lazy(() => import("./pages/olvidasteContraseña/reescribirContraseña.jsx"));

// import Correofallido from "./pages/olvidasteContraseña/correoFallido.jsx";
import Expirado from "./pages/olvidasteContraseña/expiracion.jsx";
import Credencial from "./pages/olvidasteContraseña/credenciales.jsx";

// Componentes de registro
import Registro from "./pages/registropostu/registro.jsx";
import RegistroEmpresa from "./pages/registroEmpresa/registroEmpresa.jsx";
import NuevoUser from "./pages/nuevoUser/nuevoUser.jsx";

// Dashboard y componentes principales
import Dashboard from "./pages/dashboard/dashboard";
import DashboardEmp from './pages/dashboard/dashboardemp.jsx';

// Componentes de edición
import EditarPorcentaje from "./pages/editarPorcentajeDesarr/editarPorcentaje.jsx";
import EditarUsuario from "./pages/editarUsuario/editarUsuario.jsx";

// Componentes de usuarios
const VerUsers = lazy(() => import("./pages/visualizarUsers.jsx"));
const EmpresasRegistradas = lazy(() => import("./pages/empresasRegistradas/empresasRegistradas"));

// Componentes de módulos
const Modulos = lazy(() => import("./pages/modulos/modulos.jsx"))
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
import EditarTalleres from './pages/talleres/editartalleres.jsx';
import NuevoTaller from './pages/talleres/nuevotaller.jsx';

// Otros componentes
import AceptarEmpresas from "./pages/aceptarEmpresas/aceptarempv";
import DetalleEmpresas from "./pages/aceptarEmpresas/verinfoempresa.jsx"
import Autoevaluacion from "./pages/autoevaluacion/autoevaluacion.jsx";
import VerEmpDiag from './pages/diagnostico/verempdiag.jsx';
import DiagnosticoEmpresa from './pages/diagnostico/diagnosticoempresa.jsx';

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
    <Suspense fallback={<Preloader />}>
      <Router>
        <Routes>
          {/* Rutas sin protección */}
          <Route path="/" element={<Talleres />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/registro-empresa" element={<RegistroEmpresa />} />
          <Route path="/autoevaluacion" element={<Autoevaluacion />} />
          <Route path="/olvidaste-contraseña" element={<Olvidastecontra />} />
          <Route path="/reescribir-contraseña" element={<Rescribircontrase />} />
          <Route path="/credenciales" element={<Credencial />} />
          <Route path="/expiracion" element={<Expirado />} />


          {/* Rutas protegidas */}
          <Route path="/detalles-empresa/:nit" element={
            <ProtectedRoute allowedRoles={[1, 2, 3]}>
              <DetalleEmpresas />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={[1, 2, 3]}>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard-emp" element={
            <ProtectedRoute allowedRoles={[1, 2, 3]}>
              <DashboardEmp />
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
          <Route path="/editar-taller" element={
            <ProtectedRoute allowedRoles={[1, 2, 3]}>
              <EditarTalleres />
            </ProtectedRoute>
          } />
          <Route path="/nuevo-taller" element={
            <ProtectedRoute allowedRoles={[1, 2, 3]}>
              <NuevoTaller />
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
            <ProtectedRoute allowedRoles={[1]}>
              <NuevoUser />
            </ProtectedRoute>
          } />
          <Route path="/diagnostico" element={
            <ProtectedRoute allowedRoles={[1, 2, 3]}>
              <VerEmpDiag />
            </ProtectedRoute>
          } />
          <Route path="/diagnostico/empresa" element={
            <ProtectedRoute allowedRoles={[1, 2, 3]}>
              <DiagnosticoEmpresa />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRoutes;
