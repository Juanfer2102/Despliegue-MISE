import React from 'react';
import IconCheck from "../../images/icons/iconsmodales/Icon1.png";

export default function Notification() {
  return (
    <div className="w-120 h-32 bg-white rounded-lg flex flex-row gap-6 p-2">
      <svg
        className="pt-5"
        width="90px"
        height="90px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="#729517" strokeWidth="1.5" />
        <path
          d="M8.5 12.5L10.5 14.5L15.5 9.5"
          stroke="#729517"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex flex-col gap-4 justify-center">
        <p className="text-xl font-bold">¡Aplicado Correctamente!</p>
        <p className="opacity-60">
          Se ha aplicado correctamente los cambios, revísalos.
        </p>
      </div>

      <svg
        className="p-0.5 cursor-pointer"
        width="34px"
        height="34px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
          fill="#729517"
        />
      </svg>
    </div>
  );
}
