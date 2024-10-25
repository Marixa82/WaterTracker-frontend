// import path from "path";

import { lazy } from 'react';
export const HOME_ROUTE: string = '/'; 
export const LOGIN_ROUTE: string = '/login';
export const REGISTER_ROUTE: string = '/register';
export const WATER_ROUTE: string = '/water';

const HomePage = lazy(() => import('../../pages/Home/home-page'));
const SignInPage = lazy(() => import('../../pages/SignIn/SignInPage'));
const SignUpPage = lazy(() => import('../../pages/SignUp/SignUpPage'));
const BookListPage = lazy(() => import('../BookList'));

export {HomePage, SignInPage, SignUpPage, BookListPage} 