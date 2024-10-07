import  { ReactNode } from 'react';

interface SignInProps {
  children: ReactNode;
}

function SignIn({ children }: SignInProps) {
  return (
    <>
      <h1>SignIn</h1>
      {children}
    </>
  );
}

export default SignIn;
