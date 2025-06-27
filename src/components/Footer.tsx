import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>🫒 Ayvalık Zeytinyağı</h3>
          <p>Dedemizin 50 yıllık deneyimiyle, Ayvalık'ın bereketli topraklarında üretilen doğal zeytinyağları.</p>
        </div>
        
        <div>
          <h4>Hızlı Bağlantılar</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Ana Sayfa</Link></li>
            <li><Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Ürünler</Link></li>
            <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>Hakkımızda</Link></li>
            <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>İletişim</Link></li>
          </ul>
        </div>
        
        <div>
          <h4>İletişim</h4>
          <p>📍 Ayvalık, Balıkesir</p>
          <p>📞 0532 123 45 67</p>
          <p>✉️ info@ayvalikzeytinyagi.com</p>
        </div>
        
        <div>
          <h4>Sosyal Medya</h4>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>📘</a>
            <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>📷</a>
            <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>📱</a>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #555' }}>
        <p>&copy; 2024 Ayvalık Zeytinyağı. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer; 