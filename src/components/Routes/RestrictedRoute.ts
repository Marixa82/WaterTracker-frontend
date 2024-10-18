import { HOME_ROUTE } from '../constants/routes';
import  { ReactNode } from 'react';
import useAuthRedirect from "../../hooks/useNavigationHook";


interface RestrictedRouteProps {
    children: ReactNode;
    redirectTo?: string; 
  }
  
  const RestrictedRoute = ({ children, redirectTo = HOME_ROUTE }: RestrictedRouteProps) => {
    const authenticated = useAuthRedirect(redirectTo);

  return authenticated ?   null : children;
  };
  
  export default RestrictedRoute;