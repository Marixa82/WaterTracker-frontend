import { UserMenu } from "../UserMenu";
import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import { useAuth } from "../../hooks/useNavigationHook";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div >

    )
}