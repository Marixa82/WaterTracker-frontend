import React from 'react';

interface IconProps {
  iconId: string;  // Ідентифікатор символу з спрайту
  width?: number;  // Ширина іконки
  height?: number; // Висота іконки
  color?: string;  // Колір іконки
  className?: string; // Додаткові CSS класи
}

const Icon: React.FC<IconProps> = ({ iconId, width = 24, height = 24, color = 'currentColor', className = '' }) => (
  <svg width={width} height={height} fill={color} className={className} aria-hidden="true">
    <use xlinkHref={`#${iconId}`} />
  </svg>
);

export default Icon;
