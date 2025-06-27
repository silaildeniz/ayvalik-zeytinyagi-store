import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import manzara1 from '../assets/images/gallery/manzara-1.jpg';
import uretim1 from '../assets/images/gallery/uretim-1.png';
import uretim2 from '../assets/images/gallery/uretim-2.png';
import uretim3 from '../assets/images/gallery/uretim-3.png';
import bal1 from '../assets/images/gallery/bal-1.png';
import bal2 from '../assets/images/gallery/bal-2.png';
import recel1 from '../assets/images/gallery/recel-1.png';
import hasat1 from '../assets/images/gallery/hasat-1.png';
import zeytinlik1 from '../assets/images/gallery/zeytinlik-1.png';
import zeytinlik2 from '../assets/images/gallery/zeytinlik-2.jpg';
import kultur1 from '../assets/images/gallery/kultur-1.jpg';
import sabun1 from '../assets/images/gallery/sabun-1.jpg';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  const galleryImages = [
    { src: manzara1, title: "Ayvalık Manzarası", description: "Zeytinliklerin muhteşem görünümü" },
    { src: uretim1, title: "Zeytinyağı Üretimi", description: "Geleneksel üretim yöntemleri" },
    { src: uretim2, title: "Modern Üretim", description: "Teknolojik üretim süreçleri" },
    { src: uretim3, title: "Kalite Kontrol", description: "Her aşamada kalite kontrolü" },
    { src: bal1, title: "Doğal Bal", description: "Ayvalık'ın çiçeklerinden" },
    { src: bal2, title: "Bal Üretimi", description: "Geleneksel bal üretimi" },
    { src: recel1, title: "Ev Yapımı Reçel", description: "Doğal meyve reçelleri" },
    { src: hasat1, title: "Zeytin Hasadı", description: "Geleneksel hasat yöntemleri" },
    { src: zeytinlik1, title: "Zeytinlikler", description: "Geniş zeytinlik alanları" },
    { src: zeytinlik2, title: "Zeytin Ağaçları", description: "Yaşlı zeytin ağaçları" },
    { src: kultur1, title: "Kültürel Miras", description: "Ayvalık'ın kültürel değerleri" },
    { src: sabun1, title: "Zeytinyağı Sabunu", description: "Doğal zeytinyağı sabunu" }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Ayvalık'ın En Kaliteli Zeytinyağları</h1>
        <p>Dedemizin 50 yıllık deneyimiyle, geleneksel yöntemlerle üretilen doğal zeytinyağları</p>
        <Link to="/products" className="btn">Alışverişe Başla</Link>
      </section>

      {/* Görsel Galeri Bölümü */}
      <section className="gallery-section">
        <h2 className="section-title">Ayvalık'tan Görseller</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.title} 
                className="gallery-image"
              />
              <div className="gallery-caption">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Öne Çıkan Ürünler */}
      <section className="featured-products">
        <h2 className="section-title">Öne Çıkan Ürünlerimiz</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Ürün+Görseli';
                }}
              />
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">{product.price.toFixed(2)} ₺</p>
                <Link to={`/product/${product.id}`} className="btn product-btn">
                  İncele
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/products" className="btn">Tüm Ürünleri Gör</Link>
        </div>
      </section>

      {/* Hakkımızda Kısa Tanıtım */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">Hakkımızda</h2>
          <p className="about-text">
            Dedemiz 1970'lerden beri Ayvalık'ta zeytin yetiştiriciliği yapıyor. 
            Geleneksel yöntemlerle, modern teknolojiyi harmanlayarak ürettiğimiz zeytinyağları, 
            sadece lezzet değil, aynı zamanda sağlık da sunuyor. 
            Her damla, Ayvalık'ın bereketli topraklarının ve emeğimizin bir ürünü.
          </p>
          <Link to="/about" className="btn">
            Daha Fazla Bilgi
          </Link>
        </div>
      </section>

      {/* Özellikler */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🫒</div>
            <h3>Doğal Üretim</h3>
            <p>Hiçbir kimyasal katkı maddesi kullanmadan, tamamen doğal yöntemlerle üretim.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Hızlı Teslimat</h3>
            <p>Türkiye'nin her yerine güvenli ve hızlı kargo ile teslimat.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Kalite Garantisi</h3>
            <p>50 yıllık deneyimimizle kaliteli ürün garantisi veriyoruz.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 