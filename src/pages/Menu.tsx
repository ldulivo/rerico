import { useEffect, useState } from 'react';
import api from '../services/api';
import type { MenuCategory, MenuItem } from '../types/menu';

export const Menu = () => {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, itemRes] = await Promise.all([
          api.get('/menu-category'),
          api.get('/menu')
        ]);
        setCategories(catRes.data);
        setItems(itemRes.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter);

  if (loading) return <div className="container">Cargando delicias...</div>;

  return (
    <section className="section active">
      <div className="container">
        <h2>Nuestra Carta</h2>
        
        {/* Filtros dinámicos basados en la API */}
        <div className="menu-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button 
              key={cat._id}
              className={`filter-btn ${filter === cat._id ? 'active' : ''}`}
              onClick={() => setFilter(cat._id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid de platos */}
        <div className="menu-grid">
          {filteredItems.map(item => (
            <article key={item._id} className="menu-item">
              <div className="item-header">
                <h3>{item.title}</h3>
                <span className="item-price">{item.price} {item.currency === 'EUR' ? '€' : item.currency}</span>
              </div>
              <p className="item-desc">{item.description}</p>
              <div className="item-tags">
                {item.metadata.tags.map(tag => (
                  <span key={tag} className="item-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};