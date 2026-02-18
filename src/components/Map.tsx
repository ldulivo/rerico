import { type FC } from 'react';

interface MapProps {
  height?: string;
  className?: string;
}

export const Map: FC<MapProps> = ({ height = "400px", className = "" }) => {
  return (
    <div className={`map-wrapper ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.123456789!2d-1.13!3d37.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU4JzQ4LjAiTiAxwrAwNyc0OC4wIlc!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de ReRico"
      ></iframe>
    </div>
  );
};