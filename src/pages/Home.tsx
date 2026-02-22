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
            src="public/img/tango_y_flamenco_realista_v3.webp"
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
                src="public/img/mesa_fusion.webp"
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
            <p>En Fuego & Brasa no cocinamos, oficiamos un ritual. Utilizamos exclusivamente leña de encina y carbón vegetal de quebracho blanco para aportar ese aroma inconfundible a nuestros cortes.</p>
            <div className="order-1--insignia">
              <div className="item-start">
                <PremiumCuts size={32} />
                <div className="item-text">
                  <h4>Cortes Premium</h4>
                  <p>Selección de las mejores razas del mundo.</p>
                </div>
              </div>
              <div className="item-start">
                <OakFirewood size={32} />
                <div className="item-text">
                  <h4>Leña de Encina</h4>
                  <p>Brasas aromáticas para un sabor único.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
