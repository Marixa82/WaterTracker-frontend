import logoUrl from '../assets/LogoWater.svg';
import { useNavigate } from 'react-router-dom';
interface LogoProps {
  isLoggedIn: boolean;
}

const Logo: React.FC<LogoProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const redirectPath = isLoggedIn ? '/home' : '/';

  return (
    <a href={redirectPath} onClick={() => navigate(redirectPath)}>
      <img src={logoUrl} alt="Logo" />
      <h1>TRACKER<br />OF WATER</h1>
    </a>
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