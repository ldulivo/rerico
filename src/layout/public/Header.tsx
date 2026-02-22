const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-content">
          <div className="nav-hero">
            <div className="nav-hero--text">
              <img
                src="public/logo_512.png"
                alt="logo rerico"
                className="nav-logo"
              />
              <span className="nav-hero--span">R</span>e
              <span className="nav-hero--span">R</span>ico
            </div>
          </div>
          <div className="nav-menu">
            <div className="nav-menu--link">Inicio</div>
            <div className="nav-menu--link">Servicios y Brasas</div>
            <div className="nav-menu--carta">La Carta</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
