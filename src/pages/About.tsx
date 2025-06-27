import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#8B4513' }}>
        Hakkımızda
      </h1>

      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(139, 69, 19, 0.8), rgba(139, 69, 19, 0.8)), url("/images/olive-grove.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center',
        marginBottom: '3rem',
        borderRadius: '10px'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Ayvalık'ın Bereketli Topraklarından
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          1970'lerden beri Ayvalık'ın bereketli topraklarında zeytin yetiştiriciliği yapıyoruz. 
          Geleneksel yöntemlerle, modern teknolojiyi harmanlayarak ürettiğimiz zeytinyağları, 
          sadece lezzet değil, aynı zamanda sağlık da sunuyor.
        </p>
      </section>

      {/* Hikayemiz */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ 
          background: 'white', 
          padding: '3rem', 
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#8B4513', marginBottom: '2rem', textAlign: 'center' }}>
            Hikayemiz
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div>
              <h3 style={{ color: '#8B4513', marginBottom: '1rem' }}>Başlangıç</h3>
              <p style={{ lineHeight: '1.8', color: '#666' }}>
                Dedemiz 1970'lerde Ayvalık'ta küçük bir zeytinlik ile başladı. 
                O zamanlar sadece aile ihtiyacı için üretim yapıyorduk. 
                Zamanla kalitemizi fark eden komşularımız da bizden zeytinyağı almaya başladı.
              </p>
            </div>
            
            <div>
              <h3 style={{ color: '#8B4513', marginBottom: '1rem' }}>Büyüme</h3>
              <p style={{ lineHeight: '1.8', color: '#666' }}>
                1990'larda modern ekipmanlar ekleyerek üretim kapasitemizi artırdık. 
                Ancak geleneksel yöntemlerimizi hiçbir zaman terk etmedik. 
                Her damla zeytinyağımız hala aynı özenle üretiliyor.
              </p>
            </div>
            
            <div>
              <h3 style={{ color: '#8B4513', marginBottom: '1rem' }}>Bugün</h3>
              <p style={{ lineHeight: '1.8', color: '#666' }}>
                Bugün Türkiye'nin dört bir yanına zeytinyağı gönderiyoruz. 
                Müşterilerimizin güveni bizim en büyük motivasyonumuz. 
                Kalitemizden ödün vermeden büyümeye devam ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#8B4513' }}>
          Değerlerimiz
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
            <h3 style={{ color: '#8B4513', marginBottom: '1rem' }}>Doğallık</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Hiçbir kimyasal katkı maddesi kullanmadan, tamamen doğal yöntemlerle üretim yapıyoruz.
            </p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⭐</div>
            <h3 style={{ color: '#8B4513', marginBottom: '1rem' }}>Kalite</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              50 yıllık deneyimimizle en yüksek kalitede zeytinyağı üretmeye odaklanıyoruz.
            </p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ color: '#8B4513', marginBottom: '1rem' }}>Güven</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Müşterilerimizle uzun vadeli güven ilişkisi kurmayı hedefliyoruz.
            </p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
            <h3 style={{ color: '#8B4513', marginBottom: '1rem' }}>Sürdürülebilirlik</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Çevreye duyarlı üretim yöntemleri kullanarak gelecek nesillere temiz bir dünya bırakıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Üretim Süreci */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ 
          background: 'white', 
          padding: '3rem', 
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#8B4513', marginBottom: '2rem', textAlign: 'center' }}>
            Üretim Sürecimiz
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🫒</div>
              <h4 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>Hasat</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Zeytinlerimizi en uygun zamanda, elle topluyoruz.
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧹</div>
              <h4 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>Temizlik</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Zeytinleri özenle temizleyip yıkıyoruz.
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚙️</div>
              <h4 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>Sıkım</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Soğuk sıkım yöntemiyle yağı çıkarıyoruz.
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🫗</div>
              <h4 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>Filtreleme</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Doğal filtreleme ile temizliyoruz.
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏺</div>
              <h4 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>Şişeleme</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Hijyenik koşullarda şişeliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
          color: 'white',
          padding: '3rem',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '2rem' }}>Rakamlarla Biz</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem' 
          }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>50+</div>
              <div>Yıllık Deneyim</div>
            </div>
            
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>1000+</div>
              <div>Mutlu Müşteri</div>
            </div>
            
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>5000+</div>
              <div>Zeytin Ağacı</div>
            </div>
            
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>100%</div>
              <div>Doğal Üretim</div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section style={{ textAlign: 'center' }}>
        <div style={{ 
          background: 'white', 
          padding: '3rem', 
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#8B4513', marginBottom: '1rem' }}>
            Bizimle İletişime Geçin
          </h2>
          <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Sorularınız için bize ulaşabilir, zeytinyağımız hakkında daha fazla bilgi alabilirsiniz.
          </p>
          <a 
            href="/contact" 
            className="btn" 
            style={{ 
              fontSize: '1.1rem',
              padding: '15px 30px'
            }}
          >
            İletişime Geç
          </a>
        </div>
      </section>
    </div>
  );
};

export default About; 