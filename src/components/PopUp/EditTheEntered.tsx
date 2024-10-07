import React, { ReactNode } from 'react';

interface EditTheEnteredProps {
  children: ReactNode;
}

function EditTheEntered({ children }: EditTheEnteredProps) {
  return (
    <>
      <h1>EditTheEntered</h1>
      {children}
    </>
  );
}

export default EditTheEntered;
