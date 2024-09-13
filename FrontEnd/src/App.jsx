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
const Registro = lazy(() => import("./pages/registropostu/registro.jsx"));
const RegistroEmpresa = lazy(() => import("./pages/registroEmpresa/registroEmpresa.jsx"));
const NuevoUser = lazy(() => import("./pages/nuevoUser/nuevoUser.jsx"));

// Dashboard y componentes principales
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));
const DashboardEmp = lazy(() => import("./pages/dashboard/dashboardemp.jsx"));

// Componentes de edición
const EditarPorcentaje = lazy(() => import("./pages/editarPorcentajeDesarr/editarPorcentaje.jsx"));
const EditarUsuario = lazy(() => import("./pages/editarUsuario/editarUsuario.jsx"));

// Componentes de usuarios
const VerUsers = lazy(() => import("./pages/visualizarUsers.jsx"));
const EmpresasRegistradas = lazy(() => import("./pages/empresasRegistradas/empresasRegistradas"));

// Componentes de módulos
const Modulos = lazy(() => import("./pages/modulos/modulos.jsx"))
const Nuevomodulo = lazy(() => import("./pages/modulos/nuevomodulo.jsx"));
const Editarmodulos = lazy(() => import("./pages/modulos/editarmodulos.jsx"));

// Componentes de sueños
const Sueos = lazy(() => import("./pages/sueños/sueños.jsx"));
const NuevoSueo = lazy(() => import("./pages/sueños/nuevosueño.jsx"));
const Editarsueos = lazy(() => import("./pages/sueños/editarSueños.jsx"));

// Componentes de preguntas
const Preguntas = lazy(() => import("./pages/preguntas/preguntas.jsx"));
const NuevaPregunta = lazy(() => import("./pages/preguntas/nuevapregunta.jsx"));
const Editarpreguntas = lazy(() => import("./pages/preguntas/editarpreguntas.jsx"));

// Componentes de talleres
const Talleres = lazy(() => import("./pages/talleres/talleres.jsx"));
const EditarTalleres = lazy(() => import("./pages/talleres/editartalleres.jsx"));
const NuevoTaller = lazy(() => import("./pages/talleres/nuevotaller.jsx"));

// Otros componentes
const AceptarEmpresas = lazy(() => import("./pages/aceptarEmpresas/aceptarempv.jsx"));
const DetalleEmpresas = lazy(() => import("./pages/aceptarEmpresas/verinfoempresa.jsx"));
const Autoevaluacion = lazy(() => import("./pages/autoevaluacion/autoevaluacion.jsx"));
const VerEmpDiag = lazy(() => import("./pages/diagnostico/verempdiag.jsx"));
const DiagnosticoEmpresa = lazy(() => import("./pages/diagnostico/diagnosticoempresa.jsx"));
const Page404 = lazy(() => import("./pages/404/page404.jsx"));

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const role = userData ? userData.id_rol : null;

  return allowedRoles.includes(role) ? children : <Navigate to="/404" />;
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
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/registro-empresa" element={<RegistroEmpresa />} />
          <Route path="/autoevaluacion" element={<Autoevaluacion />} />
          <Route path="/olvidaste-contraseña" element={<Olvidastecontra />} />
          <Route path="/reescribir-contraseña" element={<Rescribircontrase />} />
          <Route path="/credenciales" element={<Credencial />} />
          <Route path="/expiracion" element={<Expirado />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
          

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
