import { FormUserData } from "../Forms/FormUserData";
import {PasswordForm} from "../Forms/PasswordForm";
import { useAppDispatch } from "../../hooks/hook";
import { UploadUserPhotoButton } from "./OpenButtonModals";
import { authOperations } from "../../redux/auth";
import { useState } from "react";
import { toast } from 'react-toastify';
import { UserData } from "../../redux/types";


interface SettingProps {
  onClose: () => void;
  initialUserData: UserData;
}

export const Setting: React.FC<SettingProps> = ({ initialUserData, onClose }) => {
  const [userData, setUserData] = useState<UserData>(initialUserData); // Стейт для зберігання даних користувача
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleFieldUpdate = (field: keyof UserData, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value })); // Оновлення конкретного поля
  };
  const handlePasswordDataUpdate = (
    field: keyof typeof passwordData,
    value: string
  ) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSave = async () => {
    setLoading(true);
    try {
      // Викликаємо асинхронну дію для оновлення даних користувача
      const resultAction = await dispatch(authOperations.updateUserData(userData));

      if (authOperations.updateUserData.fulfilled.match(resultAction)) {
        toast.success('Data updated successfully!');
        onClose(); // Закриваємо модалку після успішного збереження
      } else {
        throw new Error('Failed to update user data');
      }
    } catch (error) {
      if (error instanceof Error) {
        // Якщо error є інстанцією Error
        toast.error(error.message);
      } else {
        // Якщо тип error інший (наприклад, рядок або об'єкт)
        toast.error('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal show d-block" tabIndex={-1} onClick={onClose} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <div className="modal-header d-flex justify-content-between align-items-center border-bottom-0">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Setting
          </h1>
          <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div className="modal-body ">
            <h2 className="modal-title">Your photo</h2>
            <div className="modal-section">
             <UploadUserPhotoButton onUpload={(newAvatarURL) => handleFieldUpdate('avatarURL', newAvatarURL)}
                currentAvatarUrl={userData.avatarURL || ''} />
            </div>
            <div className="row g-2">
              <div className="col-xl-6 col-md-12">
                <FormUserData userData={userData} onFieldUpdate={handleFieldUpdate}/>
                </div>
                <div className="col-xl-6 col-md-12">
                <PasswordForm passwordData={passwordData} onFieldUpdate={handlePasswordDataUpdate} />
                </div>
                </div>
          </div>
          <div className="modal-footer border-top-0">
            
          <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save'}
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