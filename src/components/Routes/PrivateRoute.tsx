// import { LOGIN_ROUTE } from '../constants/routes';
import  { ReactNode } from 'react';
import useAuthRedirect from "../../hooks/useNavigationHook";


interface PrivateRouteProps {
    children: ReactNode;
    
  }
  
  const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const authenticated = useAuthRedirect();

  return authenticated ? <>{children}</> : null;
  };
  
  export default PrivateRoute;