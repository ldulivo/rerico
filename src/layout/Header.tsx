import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="container nav-wrapper">
        <Link to="/" className="logo">
          ReRico
        </Link>
        
        <nav className="main-nav" aria-label="Navegación Principal">
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/menu" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Carta
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/servicios" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Servicios & Brasas
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contacto" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};