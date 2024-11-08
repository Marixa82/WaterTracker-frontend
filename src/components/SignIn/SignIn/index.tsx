import { useAppDispatch } from '../../../hooks/hook';
import { authOperations } from '../../../redux/auth';


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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <span>
          <input type="email" name='userEmail' placeholder="Enter your email..." required />
        </span>
      </label>
      <label>
        <span>
          <input type="password" name='userPassword' placeholder="Enter your password..." required minLength={7} />
        </span>
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default SignForm;


