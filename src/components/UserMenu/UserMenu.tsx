import { useAppDispatch,useAppSelector } from '../../hooks/hook';
import { authOperations, authSelectors } from '../../redux/auth';



export const UserMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(authSelectors.selectUserName);
  return (
    <>
      <h1>UserMenu</h1>
      <span>Hello,{userData.name || userData.email}</span>
        <button onClick={() => dispatch(authOperations.logOut())}>Log Out</button>
    </>
  );
}


