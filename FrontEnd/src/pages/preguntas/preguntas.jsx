import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard.jsx";
import Modal from "../../components/modales/modal.jsx";
import Aadirmodulo from "../../components/modales/añadirmodulo.jsx";
import Modalopciones from "../../components/modales/modalopciones.jsx";

// Estilos en JSX
const customScrollbarStyle = {
  overflowY: 'auto',
  scrollbarWidth: 'thin', // Para navegadores que soportan scrollbars personalizadas
  scrollbarColor: '#888 #262b32', // thumb color y track color
};

const customScrollbarThumbStyle = {
  borderRadius: '10px',
};


const Preguntas = () => {
  return (
    <LayoutDashboard title="Preguntas">
      <main className="flex flex-col w-full bg-greyBlack overflow-x-hidden h-full overflow-y-hidden" style={customScrollbarStyle}>
        <div className="flex flex-col w-full h-full">
          <div className="bg-greyBlack h-20 w-full" />
          <div className="bg-greyBg flex flex-col px-4 sm:px-8 h-full w-full">

            <p className="text-2xl text-white py-3">Preguntas</p>

            <div className="flex flex-col xl:flex-row gap-5">
              <div className="container bg-greyBlack rounded-xl max-h-[calc(100vh-10rem)] overflow-y-auto flex-grow custom-scrollbar" style={customScrollbarThumbStyle}>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 p-4 items-center w-full">
                  <a href="/editar-preguntas">
                    <Modal texto={"¿La gerencia utiliza herramientas para la gestión de su tiempo y actividades?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  </a>
                  <Modal texto={"¿La gerencia tiene definida la propuesta de valor que ofrece a sus clientes? ¿Sus colaboradores la tienen interiorizada?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La gerencia cuenta con objetivos y metas claras en cada área (financiera, clientes/mercado, procesos, desarrollo y aprendizaje) de su empresa?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={" ¿La empresa tiene caracterizadas sus operaciones? (Financieras, comerciales, productivas y de desarrollo y aprendizaje)"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa cuenta con indicadores (KPI) que permitan hacer seguimiento a sus operaciones?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa sabe cómo utilizar sus datos para tomar decisiones?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa conoce cómo analizar sus datos para tomar decisiones?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa tiene claro qué significa y transmite su marca a sus clientes?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa sabe cómo manejar los usos correctos de la marca en diferentes medios (mockups, indumentaria, social media)?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa conoce quienes son sus competidores y hace trabajo de benchmarking?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa conoce quien es su cliente ideal y sabe a qué segmento de mercado va dirigido su producto o servicio?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa sabe cómo atraer clientes potenciales a través de estrategias de contenido publicitario?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa sabe qué tipo de contenido publicitario usar para diferentes canales (Instagram, WhatsApp, página web, presencial/tradicional)?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa conoce técnicas para generación de recursos fotográficos, videos y reels?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa administra un perfil de Google my Business?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa administra un perfil de Instagram (o lo hace con terceros), crea contenido de valor y ha hecho campañas publicitarias por esta red?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa administra un perfil de WhatsApp Business, crea contenido de valor y ha hecho campañas publicitarias por esta red?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿El/la empresario (a) conoce las habilidades que debe tener un vendedor para tener más clientes?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa conoce y usa estrategias para hacer cierres de ventas?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa conoce y usa técnicas de negociación en sus ventas?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa conoce cómo organizar adecuadamente un stand (espacio comercial) para ofrecer sus productos y servicios?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa tiene perfiles de cargos definidos?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa tiene sus procesos de reclutamiento y selección de talento humano definidos?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa realiza valoración de desempeño laboral a su talento humano?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa conoce normatividad aplicable para el cumplimiento de leyes laborales?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa conoce las obligaciones normativas al momento de contratar personal?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa tiene un reglamento interno de trabajo?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa cuenta con indicadores financieros, los utiliza y analiza (endeudamiento liquidez, rentabilidad etc)?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa tiene presupuestos y proyecciones financieras?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa analiza sus estados financieros antes de realizar inversiones?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa conoce las diferentes fuentes de financiamiento disponibles para apalancar el crecimiento de su empresa?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <Modal texto={"¿La empresa conoce cuál es el valor de su empresa en el mercado a partir de técnicas de valoración reconocidas (flujo de caja libre descontado, EBITDA o EVA)?"} colorborde="border-principalGreen" colorhover="hover:bg-principalGreen" />
                  <a href="/nueva-pregunta"><Aadirmodulo /></a>
                </div>
              </div>
              <div className="flex flex-col gap-5 sm:gap-10 justify-center">
                <Modalopciones texto="Modulos" URL="/modulos" />
                <Modalopciones texto="Sueños" URL="/sueños" />
                <Modalopciones texto="Talleres" URL="/talleres" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Preguntas;
