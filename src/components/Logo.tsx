import logoUrl from '../assets/LogoWater.svg';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, WELCOME_ROUTE } from './constants/routes';
interface LogoProps {
  isLoggedIn: boolean;
}

const Logo: React.FC<LogoProps> = ({ isLoggedIn }) => {
  
  const redirectPath = isLoggedIn ? HOME_ROUTE : WELCOME_ROUTE;

  return (
    <NavLink to={redirectPath} className="d-flex align-items-center">
      <img src={logoUrl} alt="Logo" />
      <h1>TRACKER<br />OF WATER</h1>
    </NavLink>
  );
};


export default Logo;

// const Logo: React.FC = () => {
//   return (
//     <a href="/">
//       <img src={logoUrl} alt="Logo"  /><h1>TRACKER
//           <br />
//           OF WATER</h1>
//     </a>
//   );
// }