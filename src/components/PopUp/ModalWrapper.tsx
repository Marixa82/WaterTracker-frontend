import { ReactNode } from 'react';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const ModalWrapper: React.FC<ModalWrapperProps>= ({isOpen, onClose, children })=> {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-button visually-hidden">×</button>
        {children}
      </div>
    </div>
  );
};

 
