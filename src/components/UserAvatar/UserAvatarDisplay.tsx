
import { UploadUserPhotoButton } from '../PopUp/OpenButtonModals';

interface UserAvatarDisplayProps {
  avatarUrl?: string;
  avatarText?: string;
  onUploadComplete: (newAvatarUrl: string) => void;
}

const UserAvatarDisplay: React.FC<UserAvatarDisplayProps> = ({ avatarUrl,avatarText, onUploadComplete })=> {
  return (
    <div className="avatar-section d-flex justify-content-between align-items-center w-100">
    {/* Ліва частина: Аватар */}
    <div >
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="avatar"
          className="rounded-circle me-2"
          style={{ width: '32px', height: '32px' }}
        />
      ) : (
        <span
          className="avatar-placeholder rounded-circle me-2 d-flex align-items-center justify-content-center"
          style={{ width: '32px', height: '32px', backgroundColor: '#ccc' }}
        >
          {avatarText}
        </span>
      )}
    </div>

    {/* Права частина: Кнопка завантаження */}
    <div >
      <UploadUserPhotoButton onUpload={onUploadComplete} currentAvatarUrl={avatarUrl}/>
    </div>
  </div>
  );
}

export default UserAvatarDisplay;
