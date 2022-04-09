import React from 'react';
import COLORS from '../../../common/colors/';
import { ButtonCard } from './style';


const Button = ({ title, onClick, img, background, color, type ,width ,height,value,onChange ,disabled }) => {
  return (
      <ButtonCard 
      type={type} 
      disabled={disabled}
      onClick={onClick} 
      onChange={onChange} 
      value={value}  
      background={disabled ? COLORS.MODAL_GRAY : background } 
      color={disabled ? COLORS.WHITE : color } 
      width={width} 
      height={height} 
      >
        <img src={img} alt=''/>
        {title}
      </ButtonCard>
  );
};


export default Button;
