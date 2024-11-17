import Icon from "../Icon";
import { useAppDispatch } from "../../hooks/hook";
import { authOperations } from "../../redux/auth";
import { UploadPhotoContainer, AvatarWrapper, AvatarImage, AvatarInitial, UploadLabel, HiddenFileInput } from "./PopUp.styled";

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
        <button onClick={onClick}>
                  <Icon iconId="icon-arrow-right-on-rectangle" />
                  <span>Log out</span>
                </button>
    )
}
interface UploadUserPhotoButtonProps {
  onUpload: (avatarUrl: string) => void;
  currentAvatarUrl?: string; 
  userName?: string; 
}

export const UploadUserPhotoButton: React.FC<UploadUserPhotoButtonProps> = ({ onUpload, currentAvatarUrl, userName }) => {
  const dispatch = useAppDispatch();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const resultAction = await dispatch(authOperations.uploadAvatarUser({ file }));
      if (authOperations.uploadAvatarUser.fulfilled.match(resultAction)) {
        const newAvatarUrl = resultAction.payload.avatarURL;
        onUpload(newAvatarUrl);
      }
    }
  };

  const renderAvatar = () => {
    if (currentAvatarUrl) {
      return <AvatarImage src={currentAvatarUrl} alt="User Avatar" />;
    } else {
      return <AvatarInitial>{userName?.charAt(0)?.toUpperCase()}</AvatarInitial>;
    }
  };

  return (
    <UploadPhotoContainer>
      <AvatarWrapper>
        {renderAvatar()}
      </AvatarWrapper>
      <UploadLabel>
        <Icon iconId="icon-arrow-up-tray" />
        <span>Upload Photo</span>
        <HiddenFileInput type="file" accept="image/*" onChange={handleFileChange} />
      </UploadLabel>
    </UploadPhotoContainer>
  );
};

// interface UploadUserPhotoButtonProps {
//   onUpload: (newAvatarUrl: string) => void;
// }

// export const UploadUserPhotoButton: React.FC<UploadUserPhotoButtonProps> = ({ onUpload }) => {
//   const dispatch = useAppDispatch();

//   const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       // Відправляємо запит на бекенд для завантаження фото
//       const resultAction = await dispatch(authOperations.uploadAvatarUser({ file }));
//       if (authOperations.uploadAvatarUser.fulfilled.match(resultAction)) {
//         const newAvatarUrl = resultAction.payload.avatarURL; // Отримуємо URL з результату запиту
//         onUpload(newAvatarUrl); // Викликаємо onUpload з URL нового аватара
//       }
//     }
//   };

//   return (
//     <label className="menu-item">
//       <Icon iconId="icon-arrow-up-tray" />
//       <span>Upload Photo</span>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         style={{ display: 'none' }} // прихований інпут
//       />
//     </label>
//   );
// };
