import React, { ReactNode } from 'react';

interface MyDailyNormProps {
  children: ReactNode;
}

function MyDailyNorm({ children }: MyDailyNormProps) {
  return (
    <>
      <h1>MyDailyNorm</h1>
      {children}
    </>
  );
}

export default MyDailyNorm;
