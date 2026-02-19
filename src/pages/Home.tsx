import { useNavigate } from 'react-router-dom';
import { Map } from '../components/Map';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="section active">
      <div className="overlay-content">
        <div className="overlay">
          <img src="public/assets/img/plato_argentino.webp" alt="plato argentino a la brasa" />
        </div>
      </div>
      <div id="home-section">
        <div className="hero-content">
          <h1>
            Donde el Tango <br />
            Baila con el Flamenco
          </h1>
          <p>
            Una experiencia culinaria que une la pasión de las brasas argentinas 
            con la tradición de la cocina española. Ingredientes honestos, 
            fuego real y café de especialidad.
          </p>
          <button 
            onClick={() => navigate('/menu')} 
            className="btn-primary"
          >
            Ver La Carta
          </button>
        </div>
        <div className="hero-image">
          <img 
            src="public/assets/img/tango_flamenco_v2.webp" 
            alt="Plato fusión de asado y guarnición mediterránea" 
          />
        </div>
      </div>
      <div className="container">
        <h2>Tu mesa ya está lista, <span>solo falta que llegues</span></h2>
        <Map height="400px" />
      </div>
    </section>
  );
};