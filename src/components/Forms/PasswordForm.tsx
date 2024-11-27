import { useState } from 'react';

interface PasswordFormProps {
  passwordData: {
    currentPassword: string;
    newPassword: string;
    repeatPassword: string;
  };
  onFieldUpdate: (field: keyof PasswordFormProps['passwordData'], value: string) => void;
}
export const PasswordForm: React.FC<PasswordFormProps> = ({ passwordData, onFieldUpdate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  // Функція для переключення видимості паролів
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    onFieldUpdate(id as keyof PasswordFormProps['passwordData'], value);

    // Перевірка відповідності паролів
  if (id === 'repeatPassword' || id === 'newPassword') {
    setPasswordMatchError(passwordData.newPassword !== value);
  }
  };
  

  return (
    <form action="#">
      <div className="mb-3 ">
        <label htmlFor="currentPassword" className="form-label">Current Password</label>
        <div className="input-group">
        <input
            type={showPassword ? 'text' : 'password'}
            className="form-control form-control-password border-end-0"
            id="currentPassword"
            placeholder="Enter current password"
            value={passwordData.currentPassword}
            onChange={handleInputChange}
            required
          />
      <button
    className="btn border border-start-0"
    onClick={togglePasswordVisibility}
    aria-label="Toggle password visibility"
  >
        {showPassword ? (
          <i className="bi bi-eye-slash-fill"></i> // Bootstrap іконка для приховування
        ) : (
          <i className="bi bi-eye-fill"></i> // Bootstrap іконка для показу
        )}
      </button>
    </div>
      </div>

      <div className="mb-3">
        <label htmlFor="newPassword" className="form-label">New Password</label>
        <div className="input-group">
        <input
            type={showPassword ? 'text' : 'password'}
            className="form-control form-control-password border-end-0"
            id="newPassword"
            placeholder="Enter new password"
            value={passwordData.newPassword}
            onChange={handleInputChange}
            required
          />
          <button
            type="button"
            className="btn border border-start-0"
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
          <i className="bi bi-eye-slash-fill"></i> // Bootstrap іконка для приховування
        ) : (
          <i className="bi bi-eye-fill"></i> // Bootstrap іконка для показу
        )}
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="repeatPassword" className="form-label">Repeat new password:</label>
        <div className="input-group">
        <input
            type={showPassword ? 'text' : 'password'}
            className="form-control form-control-password border-end-0"
            id="repeatPassword"
            placeholder="Repeat new password"
            value={passwordData.repeatPassword}
            onChange={handleInputChange}
            required
          />
          <button
            type="button"
            className="btn border border-start-0"
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
          <i className="bi bi-eye-slash-fill"></i> // Bootstrap іконка для приховування
        ) : (
          <i className="bi bi-eye-fill"></i> // Bootstrap іконка для показу
        )}
          </button>
        </div>
        {passwordMatchError && (
          <div className="invalid-feedback d-block">Passwords do not match</div>
        )}
      </div>
    </form>
  );
};

