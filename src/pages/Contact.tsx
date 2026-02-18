import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Map } from '../components/Map';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica de envío (ej: api.post('/contact', formData))
    console.log('Datos enviados:', formData);
    alert('Gracias por tu mensaje, Leo. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section active">
      <div className="container">
        <h2>Contacto y Reservas</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Encuéntranos</h3>
            <p>Estamos ubicados en el corazón del distrito gastronómico de Murcia. Recomendamos reservar con 24h de antelación.</p>
            
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Calle del Sabor 123, Murcia</li>
              <li><i className="fas fa-phone"></i> +34 912 345 678</li>
              <li><i className="fas fa-envelope"></i> reservas@rerico.com</li>
              <li><i className="fas fa-clock"></i> Mar - Dom: 13:00 - 00:00</li>
            </ul>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje o Consulta</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <Map height="400px" />
      </div>
    </section>
  );
};