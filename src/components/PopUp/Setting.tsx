import { UploadUserPhotoButton } from "./OpenButtonModals";
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
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <div className="modal-header d-flex justify-content-between align-items-center">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Setting
          </h1>
          <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div className="modal-body">
            <h2 className="modal-title">Your photo</h2>
            {avatarUrl ? (
            <img src={avatarUrl} alt='avatar' className="rounded-circle me-2" style={{ width: '32px', height: '32px' }} />
          ) : (
            <span className="avatar-placeholder rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', backgroundColor: '#ccc' }}>
              {<UploadUserPhotoButton onUpload={handleUploadComplete}/>}
            </span>
          )}
            {/* Тут ви можете додати контент модального вікна */}
            Налаштування користувача
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

 