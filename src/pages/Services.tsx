export const Services = () => {
  return (
    <section className="section active">
      <div className="container">
        <div className="services-grid">
          <div className="service-content">
            <h2>Maestría en Brasas</h2>
            
            <article className="service-card">
              <h3>El Fuego</h3>
              <p>
                Nuestra cocina gira en torno a una parrilla vasca de última generación 
                alimentada con leña de encina y quebracho. Esta combinación única 
                aporta un aroma ahumado sutil que respeta la materia prima.
              </p>
            </article>

            <article className="service-card" style={{ marginTop: '2.5rem' }}>
              <h3>Eventos Privados</h3>
              <p>
                Disponemos de una bodega subterránea habilitada para catas de vino 
                y cenas privadas de hasta 12 personas. Un espacio íntimo rodeado 
                de maderas nobles y nuestra colección de vinos de Mendoza y La Rioja.
              </p>
            </article>
          </div>

          <div className="service-visuals">
            <img 
              src="src/assets/img/parrilla_con_brasas.webp" 
              alt="Parrilla con brasas encendidas" 
              className="service-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};