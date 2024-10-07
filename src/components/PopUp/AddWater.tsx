import { ReactNode } from 'react';

interface AddWaterProps {
  children: ReactNode;
}

function AddWater({ children }: AddWaterProps) {
  return (
    <>
      <h1>AddWater</h1>
      {children}
    </>
  );
}

export default AddWater;
