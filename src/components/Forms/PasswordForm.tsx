import { useState } from 'react';

const PasswordForm = () => {
  // Стан для контролю видимості паролів
  const [showPassword, setShowPassword] = useState(false);

  // Функція для переключення видимості паролів
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form action="#">
      <div className="mb-3">
        <label htmlFor="currentPassword" className="form-label">Current Password</label>
        <div className="input-group">
      <input
        type={showPassword ? 'text' : 'password'}
        className="form-control border-end-0"
        id="currentPassword"
        placeholder="Enter current password"
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
        <label htmlFor="newPassword" className="form-label">New Password</label>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control border-end-0"
            id="newPassword"
            placeholder="Enter new password"
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
            className="form-control border-end-0"
            id="repeatPassword"
            placeholder="Repeat new password"
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
    </form>
  );
};

export default PasswordForm;