import React, { useState } from 'react';
import ConfirmModal from '../../components/modales/modalconfirm';
import CancelModal from '../../components/modales/modalcancel';

const InfoAE = ({ nombre_empresa, representante, razon_social }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isCOpen, setIsCOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const closeCModal = () => setIsCOpen(false);
  const openModal = () => setIsOpen(true);
  const openCModal = () => setIsCOpen(true);

  const handleConfirm = () => {
    console.log("1")
    closeModal();
  };

  const handleCancel = () => {
    console.log("0")
    closeCModal();
  };

  return (
    <>
    <ConfirmModal isOpen={isOpen} closeModal={closeModal} handleConfirm={handleConfirm} />
    <CancelModal isCOpen={isCOpen} closeCModal={closeCModal} handleCancel={handleCancel} />
      <tr className="bg-transparent border-transparent ">
        <td className="p-5 py-8 text-lg  text-white whitespace-nowrap ">
          {nombre_empresa}
        </td>
        <td className="p-5 text-lg  text-white whitespace-nowrap">
          {representante}
        </td>
        <td className="p-5 text-lg  text-left whitespace-nowrap">
          <span className="font-medium tracking-wider text-white rounded-lg">
            {razon_social}
          </span>
        </td>
        <td className="p-5 text-sm  text-center whitespace-nowrap">
          <button
            className="p-4 pl-4 pr-4 tracking-wide text-lg transition-colors duration-200 bg-transparent transform border-solid rounded-lg hover:bg-principalGreen hover:text-white hover:border-solid border hover:border-principalGreen"
          >
            Ver Empresa
          </button>
        </td>
        <td className="text-xl  text-center whitespace-nowrap">
          <button onClick={openModal} className="p-4 pl-5 pr-5 tracking-wide text-xl transition-colors duration-200 bg-principalGreen transform border-solid rounded-tl-lg rounded-bl-lg hover:text-principalGreen hover:bg-colorwhite">
            <i className="fa-solid fa-check"></i>
          </button>
          <button onClick={openCModal} className="p-4 pl-5 pr-5 tracking-wide text-xl transition-colors duration-200 bg-red transform border-solid rounded-br-lg rounded-tr-lg hover:bg-h hover:text-red hover:bg-colorwhite">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default InfoAE;
