import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const SignUpSchema = yup.object().shape({
    username: yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: yup.string()
        .email('Invalid email')
        .required('Required'),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Required"),
});

export const SignInSchema = yup.object().shape({
    email: yup.string()
        .email('Invalid email')
        .required('Required'),
    password: yup
        .string()
        .min(5)
        .required("Required"),
});