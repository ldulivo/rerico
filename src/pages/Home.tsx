import { useNavigate } from 'react-router-dom';
import { Map } from '../components/Map';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="section active">
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
            src="src/assets/img/tango_flamenco_v2.webp" 
            alt="Plato fusión de asado y guarnición mediterránea" 
          />
        </div>
      </div>
      <div className="container">
        <img className="img-container"
          src="src/assets/img/fusion_comida.webp"
          />
      </div>
      <div className="container">
        <Map height="400px" />
      </div>
    </section>
  );
};