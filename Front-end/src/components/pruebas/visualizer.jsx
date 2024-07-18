import React from "react";

export const Visualizer = ({ resultprop, classAll, objClass, itemClass }) => {
  return (
    <>
      {console.log(resultprop)}
      <div className={`${classAll}`}>
        {Array.isArray(resultprop) &&
          resultprop.map((item, index) => (
            <div key={index} className={`${objClass}`}>
              {Object.entries(item).map(([key, value]) => (
                <div key={key} className={`${itemClass}`}>
                  {key}: {value}
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};
