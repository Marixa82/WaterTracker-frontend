import { ReactNode } from "react";
import PrivateRoute from "../Routes/PrivateRoute";
import RestrictedRoute from "../Routes/RestrictedRoute";
import { HOME_ROUTE,LOGIN_ROUTE,REGISTER_ROUTE, WELCOME_ROUTE, SignUpPage,SignInPage, WelcomePage, HomePage } from "./routes";
// import SignInPage from "../../pages/SignIn/SignInPage";




// Описуємо типи для маршрутів
interface Route {
    path: string;
    element: ReactNode; // Тут ми використовуємо 'element' правильно
}

// Масив маршрутів
export const appRoutes: Route[] = [
    {
        path: WELCOME_ROUTE,
        element: <WelcomePage />, 
    },
    {
        path: HOME_ROUTE,
        element: (
            <PrivateRoute>
                <HomePage />
            </PrivateRoute>
        ),
    },
    {
        path: LOGIN_ROUTE,
        element:(<RestrictedRoute redirectTo={HOME_ROUTE}>
            <SignInPage/>
            </RestrictedRoute>
          
        ),
    },
    {
        path: REGISTER_ROUTE,
        element: (
            <RestrictedRoute redirectTo={HOME_ROUTE}>
                <SignUpPage />
            </RestrictedRoute>
        ),
    },
];