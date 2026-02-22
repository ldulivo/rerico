import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const menuIsActived = (isActive: boolean) => {
    return isActive ? "nav-menu--link active" : "nav-menu--link"
  }

  return (
    <header>
      <nav>
        <div className="nav-content">
          <Link to="/" className="nav-hero">
            <div className="nav-hero--text">
              <img
                src="public/logo_512.png"
                alt="logo rerico"
                className="nav-logo"
              />
              <span className="nav-hero--span">R</span>e
              <span className="nav-hero--span">R</span>ico
            </div>
          </Link>
          <div className="nav-menu">
            <NavLink to="/" className={({ isActive }) => menuIsActived(isActive)}>Inicio</NavLink>
            <NavLink to="/servicios-y-brasas" className={({ isActive }) => menuIsActived(isActive)}>Servicios y Brasas</NavLink>
            <NavLink to="/menu" className="nav-menu--carta">La Carta</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
