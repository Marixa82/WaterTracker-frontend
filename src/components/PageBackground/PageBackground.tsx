import { ReactNode } from 'react';
import { backgrounds } from './Backgrounds';

import { BackgroundContainer } from './PageBackground.styles';


interface PageBackgroundProps {
  children: ReactNode;
}

export const PageBackground: React.FC<PageBackgroundProps> = ({ children }) =>{
  return(
    <BackgroundContainer
      desktopBackground={backgrounds.desktop}
      tabletBackground={backgrounds.tablet}
      mobileBackground={backgrounds.mobile}
    >
      {children}
    </BackgroundContainer>
  );
}


