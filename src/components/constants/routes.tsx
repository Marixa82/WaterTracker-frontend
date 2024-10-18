// import path from "path";
import { lazy, ReactNode } from "react";
import PrivateRoute from "../Routes/PrivateRoute";
import RestrictedRoute from "../Routes/RestrictedRoute";
import favouriteBooks from "../FavouriteBooks";


const HomePage = lazy(() => import('../../pages/Home/home-page'));
const SignInPage = lazy(() => import('../../pages/SignIn/SignInPage'));
const SignUpPage = lazy(() => import('../../pages/SignUp/SignUpPage'));
const BookListPage = lazy(() => import('../BookList'));

export const HOME_ROUTE = '/'; 
export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';
export const WATER_ROUTE = '/water';

// Описуємо типи для маршрутів
interface Route {
    path: string;
    element: ReactNode; // Тут ми використовуємо 'element' правильно
}

// Масив маршрутів
export const appRoutes: Route[] = [
    {
        path: HOME_ROUTE,
        element: <HomePage />, 
    },
    {
        path: WATER_ROUTE,
        element: (
            <PrivateRoute>
                <BookListPage books={favouriteBooks}/>
            </PrivateRoute>
        ),
    },
    {
        path: LOGIN_ROUTE,
        element: (
            <RestrictedRoute redirectTo={WATER_ROUTE}>
                <SignInPage />
            </RestrictedRoute>
        ),
    },
    {
        path: REGISTER_ROUTE,
        element: (
            <RestrictedRoute redirectTo={WATER_ROUTE}>
                <SignUpPage />
            </RestrictedRoute>
        ),
    },
];
