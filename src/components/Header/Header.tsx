import Logo from "../Logo";
import { AuthNav } from "../NavigationApi/AuthNav";
import { useAuth } from "../../hooks/useNavigationHook";




const Header: React.FC=()=> {
  const {isLoggedIn} = useAuth()
  return (
    <div className="">
      <nav className="navbar navbar-light bg-light d-flex justify-content-between align-items-center p-3">
      <Logo isLoggedIn ={isLoggedIn} />
      <AuthNav isLoggedIn={isLoggedIn} />
    </nav>
    </div>
  );
}

export default Header;

