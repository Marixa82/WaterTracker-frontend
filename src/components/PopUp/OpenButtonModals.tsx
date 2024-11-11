import Icon from "../Icon";
import { useAppDispatch } from "../../hooks/hook";
import { authOperations } from "../../redux/auth";

interface OpenSettingButtonProps {
    onClick: () => void;
  }
  
  export const OpenSettingButton: React.FC<OpenSettingButtonProps> = ({ onClick }) => {
    return (
      <button className="menu-item" onClick={onClick}>
        <Icon iconId="icon-cog-6-tooth" />
        <span>Settings</span>
      </button>
    );
  };
 
interface LogoutButtonProps {
    onClick: () => void;
}
export const LogoutButton: React.FC<LogoutButtonProps> = ({onClick}) => {
    return (
        <button className="menu-item" onClick={onClick}>
                  <Icon iconId="icon-arrow-right-on-rectangle" />
                  <span>Log out</span>
                </button>
    )
}

interface UploadUserPhotoButtonProps {
  onUpload: (newAvatarUrl: string) => void;
}

export const UploadUserPhotoButton: React.FC<UploadUserPhotoButtonProps> = ({ onUpload }) => {
  const dispatch = useAppDispatch();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Відправляємо запит на бекенд для завантаження фото
      const resultAction = await dispatch(authOperations.uploadAvatarUser({ file }));
      if (authOperations.uploadAvatarUser.fulfilled.match(resultAction)) {
        const newAvatarUrl = resultAction.payload.avatarURL; // Отримуємо URL з результату запиту
        onUpload(newAvatarUrl); // Викликаємо onUpload з URL нового аватара
      }
    }
  };

  return (
    <label className="menu-item">
      <Icon iconId="icon-arrow-up-tray" />
      <span>Upload Photo</span>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }} // прихований інпут
      />
    </label>
  );
};
// interface UploadUserPhotoButtonProps {
//   onClick: () => void;
// }
// export const UploadUserPhotoButton: React.FC<UploadUserPhotoButtonProps> = ({onClick}) => {
//   return (
//     <button className="menu-item" onClick={onClick}>
//                   <Icon iconId="icon-arrow-up-tray" />
//                   <span>Upload Photo</span>
//                 </button>
//   )
// }