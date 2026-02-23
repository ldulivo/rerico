import { NavLink } from "react-router-dom";
import ArrowBounce from "../assets/svg/ArrowBounce";
import OakFirewood from "../assets/svg/OakFirewood";
import PremiumCuts from "../assets/svg/PremiumCuts";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Donde el Tango Baila
            <br />
            <span>con el Flamenco</span>
          </h1>
          <p>
            Una experiencia culinaria que une la pasión de las brasas argentinas
            con la tradición de la cocina española. Ingredientes honestos, fuego
            real y café de especialidad.
          </p>
          <img
            src="img/tango_y_flamenco_realista_v3.webp"
            alt="logo rerico: hombre vestido de tango bailando con mujer vestida de flamenco."
          />
        </div>
        <ArrowBounce className="arrow-bounce" size={32} color="#fff" />
      </section>
      {/* section: Our Essence */}
      <section className="our-essence">
        <div className="container direction-row">
          <div className="order-2">
            <div className="order-2--border">
              <img
                src="img/mesa_fusion.webp"
                alt="mesa con fusión de comida Española y Argentina"
              />
            </div>
          </div>
          <div className="order-1">
            <div className="order-1--essence">
              <span></span>
              <span>Nuestra Essence</span>
            </div>
            <h2>
              Domando el <span>Fuego</span>
            </h2>
            <p>
              En <strong><span>R</span>e<span>R</span>ico</strong> no solo cocinamos, rendimos culto al fuego.
              Preparamos nuestras brasas con <strong>leña de encina</strong> y
              carbón de quebracho, seleccionados por su capacidad para aguantar
              el calor y sellar la carne a la perfección.
            </p>
            <p>
              Es este humo lento el que da a nuestros cortes ese sabor a leña de
              toda la vida, logrando un aroma ahumado que respeta la calidad de
              la pieza y nos devuelve a la esencia de la cocina más honesta.
            </p>
            <div className="order-1--insignia">
              <div className="item-start">
                <PremiumCuts size={32} />
                <div className="item-text">
                  <h4>Cortes Seleccionados</h4>
                  <p>Buscamos productos que cumplen con nuestros estándares de infiltración y frescura.</p>
                </div>
              </div>
              <div className="item-start">
                <OakFirewood size={32} />
                <div className="item-text">
                  <h4>Leña de Encina</h4>
                  <p>Brasas de larga duración para un aroma ahumado tradicional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* The Experience */}
      <section className="the-experience">
        <div className="wood"></div>
        <div className="container direction-column">
          <h2>La Experiencia</h2>
          <p>Platos elaborados con paciencia, respetando el producto y
            potenciando su sabor natural a través de la magia de las brasas.</p>
          <div className="gallery">
            <div className="item item-large">
              <img src="img/pimiento_provoleta_carne.webp" alt="a la parilla: provoleta pimiento carne" />
            </div>
            <div className="item">
              <img src="img/empanadas_olivas_cerveza.webp" alt="empanadas olivas cerveza" />
            </div>
            <div className="item">
              <img src="img/marineras_patatas_olivas.webp" alt="empanadas olivas cerveza" />
            </div>
            <div className="item item-medium">
              <img src="img/costilla_chorizo_vacio.webp" alt="a la parrilla: costilla chorizo vacio" />
            </div>
          </div>
          <div className="the-letter">
          <NavLink to="/menu">Ver La Carta</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
