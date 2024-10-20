// import path from "path";

import { lazy } from 'react';
export const HOME_ROUTE = '/'; 
export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';
export const WATER_ROUTE = '/water';

const HomePage = lazy(() => import('../../pages/Home/home-page'));
const SignInPage = lazy(() => import('../../pages/SignIn/SignInPage'));
const SignUpPage = lazy(() => import('../../pages/SignUp/SignUpPage'));
const BookListPage = lazy(() => import('../BookList'));

export {HomePage, SignInPage, SignUpPage, BookListPage} 