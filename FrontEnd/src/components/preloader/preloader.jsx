import './preloader.css'; // Importamos el archivo de estilos

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="box" style={{ backgroundColor: '#FADB06' }}></div>
      <div className="box" style={{ backgroundColor: '#89A80D' }}></div>
      <div className="box" style={{ backgroundColor: '#EE5B27' }}></div>
      <div className="box" style={{ backgroundColor: '#91278D' }}></div>
      <div className="box" style={{ backgroundColor: '#03A79F' }}></div>
    </div>
  );
};

export default Preloader;
