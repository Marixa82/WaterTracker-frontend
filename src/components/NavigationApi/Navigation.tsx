import { HOME_ROUTE, WATER_ROUTE } from "../constants/routes";
import { NavLink } from "react-router-dom";

import { useAuth } from "../../hooks/useNavigationHook";


export const Navigation: React.FC = () => {
  const { isLoggedIn } = useAuth();
return(
    <div>
<NavLink to={HOME_ROUTE}>Home</NavLink>
{isLoggedIn &&<NavLink to={WATER_ROUTE}>Your home page</NavLink>}
    </div>
   )
}