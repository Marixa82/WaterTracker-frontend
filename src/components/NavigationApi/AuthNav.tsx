import Icon from "../Icon";

import { LOGIN_ROUTE} from "../constants/routes";
import { NavLink } from "react-router-dom";

export const AuthNav: React.FC = () =>{
   return(
    <div>
      <NavLink to={LOGIN_ROUTE} className="auth-nav-link">
        <span>Sign in</span>
        <Icon iconId="icon-user"  />
      </NavLink>
    </div>
   )
};