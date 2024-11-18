import { useState } from "react";
import {Setting} from "./Setting";
import { LogOutModal } from "./LogOut";
import { LogoutButton, OpenSettingButton } from "./OpenButtonModals";
import {ModalWrapper} from "./ModalWrapper";
import { UserData } from "../../redux/types";

interface UserLogoModalProps {
  onClose: () => void;
  userData: UserData;
}

export const UserLogoModal: React.FC<UserLogoModalProps> = ({ onClose, userData}) => {

  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isUserLogoModalOpen, setIsUserLogoModalOpen] = useState(true); 

  const handleSettingOpen = () => {
    setIsSettingOpen(true);
    setIsUserLogoModalOpen(false);
  };

  const handleLogoutOpen = () => {
    setIsLogoutOpen(true);
    setIsUserLogoModalOpen(false);
  };

  const handleModalClose = () => {
    setIsSettingOpen(false);
    setIsLogoutOpen(false);
    setIsUserLogoModalOpen(true);
  };
  return (
    <>
      {isUserLogoModalOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="close-button visually-hidden">×</button>
            <h2 className="visually-hidden">User Logo Modal</h2>
            <div className="modal-body">
              {/* Кнопки для відкриття модалок зникнуть, коли яка-небудь модалка відкрита */}
              {!isSettingOpen && !isLogoutOpen && (
                <ul className="modal-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <OpenSettingButton onClick={handleSettingOpen} />
                  </li>
                  <li>
                    <LogoutButton onClick={handleLogoutOpen} />
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Відкриття модалок */}
      <ModalWrapper isOpen={isSettingOpen} onClose={handleModalClose}>
      <Setting 
          onClose={handleModalClose}
          initialUserData={userData}
        />
      </ModalWrapper>

      <ModalWrapper isOpen={isLogoutOpen} onClose={handleModalClose}>
        <LogOutModal onClose={handleModalClose} />
      </ModalWrapper>
    </>
  );
}



