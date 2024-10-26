import { ReactNode } from "react";
import PrivateRoute from "../Routes/PrivateRoute";
import RestrictedRoute from "../Routes/RestrictedRoute";
import favouriteBooks from "../FavouriteBooks";
import { HOME_ROUTE,WATER_ROUTE,LOGIN_ROUTE,REGISTER_ROUTE, SignInPage, SignUpPage, BookListPage } from "./routes";
import WelcomePage from "../../pages/Welcome/WelcomePage";




// Описуємо типи для маршрутів
interface Route {
    path: string;
    element: ReactNode; // Тут ми використовуємо 'element' правильно
}

// Масив маршрутів
export const appRoutes: Route[] = [
    {
        path: HOME_ROUTE,
        element: <WelcomePage />, 
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