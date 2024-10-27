import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import { useAuth } from "../../hooks/useNavigationHook";
// import Header from "../Header/Header";
import Logo from "../Logo";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div >
            <Logo/>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div >

    )
}