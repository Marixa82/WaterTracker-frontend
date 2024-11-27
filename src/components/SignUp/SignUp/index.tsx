import React, {FormEvent} from "react";
import { useAppDispatch } from "../../../hooks/hook";
import { authOperations } from '../../../redux/auth';
import { Input, Button, FormViews, H2, ButtonSign } from "../../Forms/Formik/Formik.styled";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../constants/routes";

interface FormElements extends HTMLFormControlsCollection {
    
    userEmail: HTMLInputElement;
    userPassword: HTMLInputElement;
    repeatUserPassword: HTMLInputElement;
  }
  
  interface FormEventExtended extends FormEvent<HTMLFormElement> {
    currentTarget: HTMLFormElement & { elements: FormElements };
  }

  
  const SignUp: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEventExtended): void => {
        e.preventDefault();
        const form = e.currentTarget;
        const password = form.elements.userPassword.value;
    const repeatPassword = form.elements.repeatUserPassword.value;

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }
        dispatch(authOperations.signUp({
          email: form.elements.userEmail.value,
          password: password,
        }));
        form.reset();
      };
    
    return (
        <div>
            
            <FormViews onSubmit={handleSubmit} autoComplete="off">
            <H2>Sign up</H2>
                <label>
                    <p>Enter your email</p>
                    <span>
                        <Input type="email" name="userEmail" placeholder="E-mail" required />
                    </span>
                </label>
                <label>
                    <p>Enter your password</p>
                    <span>
                    <Input
                type="password"
                name="userPassword"
                required
                placeholder="Password"
                minLength={6}
                maxLength={12}
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
              />
                    </span>
                </label>
                <label>
                    <p>Repeat password</p>
                    <span>
                    <Input
                type="password"
                name="repeatUserPassword"
                required
                placeholder="Password"
                minLength={6}
                maxLength={12}
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
              />
                    </span>
                </label>
                <Button type="submit" >Sign Up</Button>
                <div>
                  <Link to={LOGIN_ROUTE}>
                    <ButtonSign type='button'>Sign in</ButtonSign>
                  </Link>
                </div>
            </FormViews>
        </div>
    );
  };
  export default SignUp
// const RegisterForm = () => {
//     const dispatch = UseAppDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const form = e.currentTarget;
//         dispatch(authOperations.signUp({
//             name: form.elements.userName.value,
//             email: form.elements.userEmail.value,
//             password: form.elements.userPassword.value,
//         }));
//         form.reset();
//     };

//     return (
//         <FormViews onSubmit={handleSubmit} autoComplete="off">
//             <label>
//                 <span>
//                     <Input type="text" name="userName" placeholder="Enter your name..." required />
//                 </span>
//             </label>
//             <label>
//                 <span>
//                     <Input type="email" name="userEmail" placeholder="Enter your email..." required />
//                 </span>
//             </label>
//             <label>
//                 <span>
//                     <Input
//                         type="password"
//                         name="userPassword"
//                         required
//                         placeholder="Enter your password..."
//                         minLength="6"
//                         maxLength="12"
//                         pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
//                         title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
//                     />
//                 </span>
//             </label>
//             <Button type="submit" >Register</Button>
//         </FormViews>
//     );
// };

// export default RegisterForm;