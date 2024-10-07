import React, { ReactNode } from 'react';

interface DeleteEntryProps {
  children: ReactNode;
}

function DeleteEntry({ children }: DeleteEntryProps) {
  return (
    <>
      <h1>DeleteEntry</h1>
      {children}
    </>
  );
}

export default DeleteEntry;
