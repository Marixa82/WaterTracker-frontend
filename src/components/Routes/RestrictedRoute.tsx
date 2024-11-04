// import { HOME_ROUTE } from '../constants/routes';
import  { ReactNode } from 'react';
import useAuthRedirect from "../../hooks/useNavigationHook";


interface RestrictedRouteProps {
    children: ReactNode;
     
  }
  
  const RestrictedRoute = ({ children }: RestrictedRouteProps) => {
    const authenticated = useAuthRedirect();

    return authenticated ? <>{children}</> : null;
  };
  
  export default RestrictedRoute;