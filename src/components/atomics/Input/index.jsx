import React from 'react';
import { CardInput } from './style';

const Input = ({ name, type, onChange, placeholder,  required, value ,label , width , heigth}) => {

  return (
    <CardInput width={width} height={heigth} >
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={ value}
      />
    </CardInput>
  );
};

export default Input;
