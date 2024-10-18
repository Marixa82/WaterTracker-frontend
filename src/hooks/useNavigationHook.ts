import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseAppSelector } from "../hooks/hook";
import { authSelectors } from "../redux/auth";

const useAuthRedirect = (redirectTo: string = "/login") => {
  const authenticated = UseAppSelector(authSelectors.selectUserIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [authenticated, navigate, redirectTo]);

  return authenticated;
};

export default useAuthRedirect;
