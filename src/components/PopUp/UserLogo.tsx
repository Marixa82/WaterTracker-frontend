import { useState } from "react";
import UserLogoModal from "./UserLogoModal";

interface UserLogoProps {
  userName?: string;
  userEmail?: string;
  avatarUrl?: string;
}

const UserLogo: React.FC<UserLogoProps> = ({ userName, userEmail, avatarUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };
  const avatarText = avatarUrl 
    ? null 
    : userName 
    ? userName.charAt(0).toUpperCase() 
    : userEmail 
    ? userEmail.charAt(0).toUpperCase() 
    : '?';
  return (
    <>
      <h1 className="visually-hidden">UserLogo</h1>
      <div className="dropdown">
  <button className="btn btn-border-none dropdown-toggle d-flex align-items-center"  onClick={toggleModal}
          id="userLogoButton"
          aria-expanded="false">
  {avatarUrl ? (
            <img src={avatarUrl} alt={`${userName}'s avatar`} className="rounded-circle me-2" style={{ width: '32px', height: '32px' }} />
          ) : (
            <span className="avatar-placeholder rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: '#ccc' }}>
              {avatarText}
            </span>
          )}
          <span>{userName || userEmail || 'User'}</span>
  </button>
  
</div>
{isModalOpen && <UserLogoModal onClose={toggleModal} />}
    </>
  );
}

export default UserLogo;
