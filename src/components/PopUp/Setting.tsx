import React, { ReactNode } from 'react';

interface SettingProps {
  children: ReactNode;
}

function Setting({ children }: SettingProps) {
  return (
    <>
      <h1>Setting</h1>
      {children}
    </>
  );
}

export default Setting;
