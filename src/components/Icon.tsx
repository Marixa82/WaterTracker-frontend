import React from 'react';
import icons from '../assets/icons.svg'

interface IconProps {
  iconId: string;  
  width?: number;  
  height?: number; 
  color?: string;  
  className?: string; 
}

const Icon: React.FC<IconProps> = ({ iconId, width = 24, height = 24, color = 'currentColor', className = '' }) => (
  <svg width={width} height={height} fill={color} className={className} aria-hidden="true">
    <use href={`${icons}#${iconId}`} />           
  </svg>
);

export default Icon;
