

import { LOGIN_ROUTE, REGISTER_ROUTE } from "../constants/routes";
import { NavLink } from "react-router-dom";

export const AuthNav: React.FC = () =>{
   return(
    <div>
<NavLink to={LOGIN_ROUTE}>Login</NavLink>
<NavLink to={REGISTER_ROUTE}>Register</NavLink>
    </div>
   )
};