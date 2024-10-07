import  { ReactNode } from 'react';

interface LogOutProps {
  children: ReactNode;
}

function LogOut({ children }: LogOutProps) {
  return (
    <>
      <h1>LogOut</h1>
      {children}
    </>
  );
}

export default LogOut;
