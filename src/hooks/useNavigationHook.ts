import { useAppSelector } from "../hooks/hook";
import { authSelectors } from "../redux/auth";

// const useAuthRedirect = (redirectTo: string = "/login") => {
//   const authenticated = useAppSelector(authSelectors.selectUserIsLoggedIn);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!authenticated) {
//       navigate(redirectTo, { replace: true });
//     }
//   }, [authenticated, navigate, redirectTo]);

//   return authenticated;
// };

// export default useAuthRedirect;

export const useAuth = () => {
  const isLoggedIn = useAppSelector(authSelectors.selectUserIsLoggedIn);
  const isRefreshing = useAppSelector(authSelectors.selectUserRefreshing);
  const user = useAppSelector(authSelectors.selectUserName);

  return {
      isLoggedIn,
      isRefreshing,
      user,
  };
};
