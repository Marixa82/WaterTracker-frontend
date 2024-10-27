import Logo from "../Logo";
import { AuthNav } from "../NavigationApi/AuthNav";





function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light d-flex justify-content-between align-items-center p-3">
      <Logo/>
      <AuthNav/>
    </nav>
    </>
  );
}

export default Header;

