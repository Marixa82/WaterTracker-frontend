import Icon from "../Icon";

import { LOGIN_ROUTE} from "../constants/routes";
import { NavLink } from "react-router-dom";

export const AuthNav: React.FC = () =>{
   return(
    <div>
<NavLink to={LOGIN_ROUTE}>Sign in <Icon iconId="icon-user" color="white"/></NavLink>
{/* <NavLink to={REGISTER_ROUTE}>Register</NavLink> */}
    </div>
   )
};