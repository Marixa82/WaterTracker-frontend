import  { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <>
      <h1>Header</h1>
      {children}
    </>
  );
}

export default Header;
