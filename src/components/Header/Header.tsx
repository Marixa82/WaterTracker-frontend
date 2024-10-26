


interface HeaderProps {
  logoUrl: string;         
  
}

function Header({ logoUrl }: HeaderProps) {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logoUrl} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            Мій сайт
          </a>
          
        </div>
      </nav>
    </>
  );
}

export default Header;

