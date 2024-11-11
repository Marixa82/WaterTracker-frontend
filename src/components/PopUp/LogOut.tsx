

interface LogOutModalProps {
  onClose: () => void;
}

export const LogOutModal: React.FC<LogOutModalProps> = ({ onClose })=> {
  return (
    <>
      <h1>LogOut</h1>
      <p>Are you sure you want to log out?</p>
      <button onClick={onClose}>Cancel</button>
      <button>Log Out</button>
    </>
  );
}

