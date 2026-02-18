import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <Link to="/" className="footer-logo">
          ReRico
        </Link>
        
        <div className="contact-info">
          <p>Brasas y Tradición</p>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
            <li><i className="fas fa-map-marker-alt"></i> Calle Principal, 123</li>
            <li><i className="fas fa-phone"></i> +34 900 000 000</li>
          </ul>
        </div>

        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.5 }}>
          <p>&copy; {currentYear} ReRico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};