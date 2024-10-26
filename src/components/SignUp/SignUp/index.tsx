import React from "react";
import { useAppDispatch } from "../../../hooks/hook";
import { authOperations } from '../../../redux/auth'


  
  const SignUp: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem('userName') as HTMLInputElement).value;
        const email = (form.elements.namedItem('userEmail') as HTMLInputElement).value;
        const password = (form.elements.namedItem('userPassword') as HTMLInputElement).value;

        dispatch(authOperations.signUp({
            name,
            email,
            password,
        }));
    }
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label>
                <span>
                    <input type="text" name="userName" placeholder="Enter your name..." required />
                </span>
            </label>
            <label>
                <span>
                    <input type="email" name="userEmail" placeholder="Enter your email..." required />
                </span>
            </label>
            <label>
                <span>
                    <input
                        type="password"
                        name="userPassword"
                        required
                        placeholder="Enter your password..."
                        // minLength="6"
                        // maxLength="12"
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                        title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
                    />
                </span>
            </label>
            <button type="submit" >Register</button>
        </form>
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