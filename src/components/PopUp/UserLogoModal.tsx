// import React, { ReactNode } from 'react';

import Icon from "../Icon";
interface UserLogoModalProps {
  onClose: () => void;
}

const UserLogoModal: React.FC<UserLogoModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-button">×</button>
        <h2 className="visually-hidden">User Logo Modal</h2>
        <div className="modal-body">
          <ul className="modal-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button className="menu-item">
                <Icon iconId="icon-cog-6-tooth" />
                <span>Settings</span>
              </button>
            </li>
            <li>
              <button className="menu-item">
                <Icon iconId="icon-arrow-right-on-rectangle" />
                <span>Log out</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
// const UserLogoModal: React.FC<UserLogoModalProps> = ({ onClose }) =>{
//   return (
//     <div className="modal">
//       <div className="modal-content">
//       <button onClick={onClose} className="close-button">×</button>
//           <h2 className="visually-hidden">UserLogoModal</h2>
//           <div className="modal-body">
//             <ul className="modal-menu" aria-labelledby="dropdownMenuButton1">
//               <li><button className="menu-item"><Icon iconId="icon-cog-6-tooth"/>Setting</button></li>
//               <li><button className="menu-item"><Icon iconId="icon-arrow-right-on-rectangle"/>Log out</button></li>
//             </ul>
//           </div>
//       </div>
      
//     </div>
//   );
// }

export default UserLogoModal;
