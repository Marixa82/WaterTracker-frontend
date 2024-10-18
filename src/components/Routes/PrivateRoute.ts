import { LOGIN_ROUTE } from '../constants/routes';
import  { ReactNode } from 'react';
import useAuthRedirect from "../../hooks/useNavigationHook";


interface PrivateRouteProps {
    children: ReactNode;
    redirectTo?: string; // Додаємо `redirectTo` як опціональний пропс
  }
  
  const PrivateRoute = ({ children, redirectTo = LOGIN_ROUTE }: PrivateRouteProps) => {
    const authenticated = useAuthRedirect(redirectTo);

  return authenticated ? children : null;
  };
  
  export default PrivateRoute;