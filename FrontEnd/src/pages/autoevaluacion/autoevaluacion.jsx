import React from 'react';
import LayoutDashboard from "../../layouts/LayoutDashboard";
import FormAuto from "../../components/forms/formsautoevaluacion/formsautoevaluacion";

// Estilos en JSX
const containerStyle = {
  backgroundColor: '#262b32', // Estilo de fondo
  color: '#ffffff', // Color de texto
};

const cardStyle = { 
  borderRadius: '16px', // Bordes redondeados
  padding: '2rem', // Espaciado interior
};

const Autoevaluacion = () => {
  return (
    <LayoutDashboard title="AutoEvaluacion">
      <main
        className="flex flex-col w-full bg-greyBlack h-screen text-white justify-center"
        style={containerStyle}
      >
        <div
          className="bg-greyBg flex flex-col h-full w-full justify-center items-center gap-5"
        >
          <div
            className="bg-greyBg flex flex-col h-full w-full items-center justify-center gap-5"
          >
            <div className="flex flex-row gap-5">
              <div
                className="w-max h-full flex flex-col gap-5 bg-greyBlack"
                style={cardStyle}
              >
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-3xl text-center pb-5">
                    AUTODIAGNÓSTICO DE FORMACIÓN <br />EMPRESARIAL
                  </p>
                  <p>
                    De acuerdo con su respuesta, el <b>
                      Modelo Integral de Servicios Empresarial<br />
                      (MISE) es el programa que más se ajusta a sus necesidades.
                    </b>
                  </p>
                </div>
                <p>
                  El MISE es una ruta de acompañamiento integral, gratuita y presencial <br />
                  diseñada a su medida.<br />
                </p>
                <div>
                  Diseñamos su ruta MISE de acuerdo con sus necesidades para que <br />
                  pueda cumplir sus sueños empresariales. La ruta <br />
                  MISE se compone de los ejes:
                </div>
                <ol>
                  <li>Información de valor para su empresa</li>
                  <li>Consultoría</li>
                  <li>Contactos de valor y <i>networking</i></li>
                  <li>Asesoría personalizada<br /></li>
                  <li>Formación especializada en 6 áreas empresariales:</li>
                </ol>
                <ul>
                  <li><span>CAPACIDADES GERENCIALES&nbsp;</span></li>
                  <li>MEJORA DE OPERACIONES APLICANDO <br />BUSINESS INTELLIGENCE<br /></li>
                  <li>GERENCIA DE MARKETING<br /></li>
                  <li><span>GERENCIA DE VENTAS</span></li>
                  <li>GERENCIA DE TALENTO HUMANO Y <br /> REGLAMENTACIÓN JURÍDICA EMPRESARIAL&nbsp;<br /></li>
                  <li>FINANZAS GERENCIALES<br /></li>
                </ul>
                <div>
                  <span>Conoce más aquí:<i>&nbsp;</i></span>
                  <span>
                    <a className="underline" href="https://ccpalmira.org.co/mise/">
                      https://ccpalmira.org.co/mise/
                    </a>
                  </span>
                </div>
              </div>
              <FormAuto />
            </div>
          </div>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default Autoevaluacion;
