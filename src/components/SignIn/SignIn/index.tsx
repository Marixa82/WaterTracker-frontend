import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/hook';
import { authOperations } from '../../../redux/auth';
import { Input, FormViews, Button, ButtonSign, H2, InputWrapper } from '../../Forms/Formik/Formik.styled';
import { REGISTER_ROUTE } from '../../constants/routes';
import Icon from '../../Icon';

interface FormData {
  email: string;
  password: string;
  
}
const SignForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem('userEmail') as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem('userPassword') as HTMLInputElement).value;

    const formData: FormData = {
      email,
      password,
    };

    dispatch(authOperations.signIn(formData));
  };

  return (
    <FormViews onSubmit={handleSubmit} autoComplete="off">
      <H2>Sign In</H2>
      <label>
        <p>Enter your email</p>
        <span>
          <Input type="email" name='userEmail' placeholder="E-mail" required />
          
        </span>
      </label>
      <label>
        <p>Enter your password</p>
        <InputWrapper>
          <Input type="password" name='userPassword' placeholder="Password" required minLength={7} />
          <Icon iconId="icon-eye-slash" width={16} height={16} />
        </InputWrapper>
      </label>
      
      <Button type="submit">Sign In</Button>
      <div>
        <Link to={REGISTER_ROUTE}>
        <ButtonSign type='button'>Sign up</ButtonSign></Link>
      </div>
    </FormViews>
  );
};

export default SignForm;


