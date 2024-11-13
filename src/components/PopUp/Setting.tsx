import { FormUserData } from "../Forms/FormUserData";
import PasswordForm from "../Forms/PasswordForm";
import UserAvatarDisplay from "../UserAvatar/UserAvatarDisplay";
// import { UploadUserPhotoButton } from "./OpenButtonModals";
import { useState } from "react";

interface SettingProps {
  onClose: () => void;
  initialAvatarUrl?: string; 
}

export const Setting: React.FC<SettingProps> = ({ initialAvatarUrl, onClose }) =>{
  const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl);
  
  const handleUploadComplete = (newAvatarUrl: string) => {
    // Оновлюємо стан з новою URL після успішного завантаження аватара
    setAvatarUrl(newAvatarUrl);
  };
  return (
    <div className="modal show d-block" tabIndex={-1} onClick={onClose} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <div className="modal-header d-flex justify-content-between align-items-center">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Setting
          </h1>
          <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div className="modal-body ">
            <h2 className="modal-title">Your photo</h2>
            <div className="modal-section">
             <UserAvatarDisplay onUploadComplete={handleUploadComplete} avatarUrl={avatarUrl}/>
            </div>
            <div className="row g-2">
              <div className="col-xl-6 col-md-12">
                <FormUserData/>
                </div>
                <div className="col-xl-6 col-md-12">
                <PasswordForm/>
                </div>
                </div>
          </div>
          <div className="modal-footer">
            
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

{/* <form>
<div className="mb-3">
  <label htmlFor="outdatedPassword" className="form-label">Outdated password:</label>
  <input type="password" className="form-control" id="outdatedPassword" placeholder="123qaz@456" />
</div>
<div className="mb-3">
  <label htmlFor="additionalInfo" className="form-label">Additional Info</label>
  <textarea className="form-control" id="additionalInfo" rows={3}></textarea>
</div>
<div className="mb-3">
  <label htmlFor="additionalInfo" className="form-label">Additional Info</label>
  <textarea className="form-control" id="additionalInfo" rows={3}></textarea>
</div>
</form> */}