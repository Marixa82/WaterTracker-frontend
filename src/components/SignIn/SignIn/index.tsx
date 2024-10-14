import { UseAppDispatch } from '../../../hook';
import { authOperations } from '../../../redux/auth'

const SignForm: React.FC = () => {
  const dispatch = UseAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('userEmail') as HTMLInputElement).value;
    const password = (form.elements.namedItem('userPassword') as HTMLInputElement).value;

    const formData = {
      email,
      password,
    };

    dispatch(authOperations.signIn(formData));
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <span>
          <input type="email" name="userEmail" placeholder="Enter your email..." required />
        </span>
      </label>
      <label>
        <span>
          <input type="password" name="userPassword" placeholder="Enter your password..." required minLength={7} />
        </span>
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default SignForm;

// import  { ReactNode } from 'react';

// interface SignInProps {
//   children: ReactNode;
// }

// function SignIn({ children }: SignInProps) {
//   return (
//     <>
//       <h1>SignIn</h1>
//       {children}
//     </>
//   );
// }

// export default SignIn;
