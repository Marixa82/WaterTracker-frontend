import {  HOME_ROUTE } from "../constants/routes";
import { NavLink } from "react-router-dom";

import { useAuth } from "../../hooks/useNavigationHook";


export const Navigation: React.FC = () => {
  const { isLoggedIn } = useAuth();
return(
    <div>
{isLoggedIn &&<NavLink to={HOME_ROUTE}>Your home page</NavLink>}
    </div>
   )
}