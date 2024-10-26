


interface HeaderProps {
  logoUrl: string;         
  registrationUrl: string; 
}

function Header({ logoUrl, registrationUrl }: HeaderProps) {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logoUrl} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            Мій сайт
          </a>
          <div className="d-flex">
            <a href={registrationUrl} className="navbar-brand" href="/signin">Реєстрація</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

