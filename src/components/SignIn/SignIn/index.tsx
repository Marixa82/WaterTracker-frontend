import { useAppDispatch } from '../../../hooks/hook';
import { authOperations } from '../../../redux/auth';
import { Input, FormViews, Button } from '../../Forms/Formik/Formik.styled';

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
          <Input type="email" name='userEmail' placeholder="Enter your email..." required />
        </span>
      </label>
      <label>
        <p>Enter your password</p>
        <span>
          <Input type="password" name='userPassword' placeholder="Enter your password..." required minLength={7} />
        </span>
      </label>
      <Button type="submit">Login</Button>
    </FormViews>
  );
};

export default SignForm;


