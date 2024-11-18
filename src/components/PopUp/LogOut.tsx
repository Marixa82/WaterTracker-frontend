
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hook';
import { authOperations } from '../../redux/auth';
import { toast } from 'react-toastify';

interface UserLogoutModalProps {
  onClose: () => void;
}

export const UserLogoutModal: React.FC<UserLogoutModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  // Закриття модалки по натисканню Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Логіка кнопки Logout
  const handleLogout = async () => {
    try {
      await dispatch(authOperations.logOut()).unwrap(); 
      onClose(); 
    } catch (error) {
      if (error instanceof Error) {
        
        toast.error(error.message);
      } else {
      toast.error('Failed to log out. Please try again.');
    }}
  };

  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      onClick={onClose} 
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between align-items-center border-bottom-0">
            <h1 className="modal-title fs-5">Log out</h1>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            <h2>Do you really want to leave?</h2>
          </div>
          <div className="modal-footer border-top-0 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

