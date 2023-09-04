import React from 'react';
import "../button/CustomButton.css"

const CustomButton = ({ text, style, className, icon, disabled }) => {
  let buttonStyle = {
    ...style, // Fusiona los estilos personalizados proporcionados
  };

  return (
    <button className={className} style={buttonStyle} id='custom-button' disabled={disabled}>
      {icon && <i className={icon}></i>} {text}
    </button>
  );
};

CustomButton.defaultProps = {
    style: { }, // Estilo predeterminado 
    icon: null,
    disabled: false
  };
  

export default CustomButton;
