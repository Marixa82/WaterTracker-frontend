// import path from "path";

import { lazy } from 'react';
export const WELCOME_ROUTE: string = '/'; 
export const LOGIN_ROUTE: string = '/login';
export const REGISTER_ROUTE: string = '/register';
export const HOME_ROUTE: string = '/home';

const HomePage = lazy(() => import('../../pages/Home/home-page'));
// const SignInPage = lazy(() => import('../../pages/SignIn/SignInPage'));
const SignUpPage = lazy(() => import('../../pages/SignUp/SignUpPage'));
const WelcomePage = lazy(() => import('../../pages/Welcome/WelcomePage'));

export {HomePage, SignUpPage, WelcomePage} 