import { UserMenu } from "../UserMenu/UserMenu";
// import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import { useAuth } from "../../hooks/useNavigationHook";
// import Header from "../Header/Header";
// import Logo from "../Logo";
import Header from "../Header/Header";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div >
            <div>
                <Navigation/>
                {isLoggedIn ? <UserMenu /> : <Header />}
            </div>
        </div >

    )
}