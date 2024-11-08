import  { ReactNode } from 'react';
import { useAppSelector } from '../../hooks/hook';
import { authSelectors } from '../../redux/auth';
import { LOGIN_ROUTE } from '../constants/routes';
import { Navigate } from 'react-router-dom';



interface PrivateRouteProps {
    children: ReactNode;
    redirectTo?: string;
  }

  const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, redirectTo = LOGIN_ROUTE }) => {
    const authenticated = useAppSelector(authSelectors.selectUserIsLoggedIn)
  return authenticated ? <>{children}</> : <Navigate to={redirectTo} replace />;
  };
  
  export default PrivateRoute;