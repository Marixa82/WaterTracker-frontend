import React, {FormEvent} from "react";
import { useAppDispatch } from "../../../hooks/hook";
import { authOperations } from '../../../redux/auth';
import { Input, Button, FormViews, H2 } from "../../Forms/Formik/Formik.styled";

interface FormElements extends HTMLFormControlsCollection {
    userName: HTMLInputElement;
    userEmail: HTMLInputElement;
    userPassword: HTMLInputElement;
  }
  
  interface FormEventExtended extends FormEvent<HTMLFormElement> {
    currentTarget: HTMLFormElement & { elements: FormElements };
  }

  
  const SignUp: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEventExtended): void => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(authOperations.signUp({
          name: form.elements.userName.value,
          email: form.elements.userEmail.value,
          password: form.elements.userPassword.value,
        }));
        form.reset();
      };
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const form = e.currentTarget;
    //     const name = (form.elements.namedItem('userName') as HTMLInputElement).value;
    //     const email = (form.elements.namedItem('userEmail') as HTMLInputElement).value;
    //     const password = (form.elements.namedItem('userPassword') as HTMLInputElement).value;

    //     dispatch(authOperations.signUp({
    //         name,
    //         email,
    //         password,
    //     }));
    // }
    return (
        <div>
            
            <FormViews onSubmit={handleSubmit} autoComplete="off">
            <H2>Sign up</H2>
                <label >
                    <p>Enter your name</p>
                    <span>
                        <Input type="text" name="userName" placeholder="Enter your name..." required />
                    </span>
                </label>
                <label>
                    <p>Enter your email</p>
                    <span>
                        <Input type="email" name="userEmail" placeholder="Enter your email..." required />
                    </span>
                </label>
                <label>
                    <p>Enter your password</p>
                    <span>
                    <Input
                type="password"
                name="userPassword"
                required
                placeholder="Enter your password..."
                minLength={6}
                maxLength={12}
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
              />
                    </span>
                </label>
                <Button type="submit" >Register</Button>
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