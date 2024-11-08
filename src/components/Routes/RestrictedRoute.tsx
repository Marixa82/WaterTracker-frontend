// import { HOME_ROUTE } from '../constants/routes';
import  { ReactNode } from 'react';
import { useAppSelector } from '../../hooks/hook';
import { authSelectors } from '../../redux/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import useAuthRedirect from "../../hooks/useNavigationHook";


interface RestrictedRouteProps {
    children: ReactNode;
    redirectTo: string;
  }
  
  const RestrictedRoute: React.FC<RestrictedRouteProps> = ({ children, redirectTo }) => {
    const isLoggedIn = useAppSelector(authSelectors.selectUserIsLoggedIn);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Якщо користувач авторизований, то редиректимо його на redirectTo
      if (isLoggedIn) {
        navigate(redirectTo, { replace: true });
      }
    }, [isLoggedIn, navigate, redirectTo]);
    return !isLoggedIn ? <>{children}</> : null;
  };
  
  export default RestrictedRoute;