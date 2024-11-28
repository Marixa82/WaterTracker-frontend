import { useState } from "react";
import { InputWrapper, Input } from "./Formik/Formik.styled";
interface PasswordInputProps {
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const PasswordInput: React.FC<PasswordInputProps> = ({ name, placeholder, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    // Функція для перемикання видимості пароля
    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };
  
    return (
      <InputWrapper>
        <Input
          type={showPassword ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
        <span onClick={togglePasswordVisibility}>
          {showPassword ? (
            <i className="bi bi-eye-slash-fill"></i> // Іконка приховування
          ) : (
            <i className="bi bi-eye-fill"></i> // Іконка показу
          )}
        </span>
      </InputWrapper>
    );
  };
  
  export default PasswordInput;