import  { ReactNode } from 'react';

import { ContainerRef } from './Container.styles';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <ContainerRef>
      <h1>Container</h1>
      {children}
    </ContainerRef>
  );
}

export default Container;
