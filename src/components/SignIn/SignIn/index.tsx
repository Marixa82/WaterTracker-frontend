import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/hook';
import { authOperations } from '../../../redux/auth';
import { Input, FormViews, Button, ButtonSign } from '../../Forms/Formik/Formik.styled';
import { REGISTER_ROUTE } from '../../constants/routes';

interface FormData {
  email: string;
  password: string;
  
}
const SignForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const form = e.currentTarget;
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
      <h2>Sign In</h2>
      <label>
        <p>Enter your email</p>
        <span>
          <Input type="email" name='userEmail' placeholder="E-mail" required />
        </span>
      </label>
      <label>
        <p>Enter your password</p>
        <span>
          <Input type="password" name='userPassword' placeholder="Password" required minLength={7} />
        </span>
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


