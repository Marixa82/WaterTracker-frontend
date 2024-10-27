import logoUrl from '../assets/LogoWater.svg';

function Logo() {
  return (
    <a href="/">
      <img src={logoUrl} alt="Logo"  /><h1>TRACKER
          <br />
          OF WATER</h1>
    </a>
  );
}

export default Logo;