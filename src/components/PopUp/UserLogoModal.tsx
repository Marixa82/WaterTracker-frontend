// import React, { ReactNode } from 'react';

import Icon from "../Icon";



function UserLogoModal() {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <h1 hidden>UserLogoModal</h1>
          <div className="modal-body">
            <ul className="modal-menu" aria-labelledby="dropdownMenuButton1">
              <li><button className="menu-item"><Icon iconId="icon-cog-6-tooth"/>Setting</button></li>
              <li><button className="menu-item"><Icon iconId="icon-arrow-right-on-rectangle"/>Log out</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogoModal;
