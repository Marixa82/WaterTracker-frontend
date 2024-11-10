import Icon from "../Icon";
import UserLogo from "../PopUp/UserLogo";
import { LOGIN_ROUTE} from "../constants/routes";
import { NavLink } from "react-router-dom";

interface AuthNavProps {
  isLoggedIn: boolean;
}

export const AuthNav: React.FC<AuthNavProps> = ({ isLoggedIn }) => {
  return (
    <div>
      {!isLoggedIn ? (
        <NavLink to={LOGIN_ROUTE} className="auth-nav-link">
          <span>Sign in</span>
          <Icon iconId="icon-user" />
        </NavLink>
      ) : (
        <UserLogo/>
      )}
    </div>
  );
};