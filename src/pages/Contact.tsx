import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ad soyad gereklidir';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi girin';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Konu gereklidir';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj gereklidir';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#8B4513' }}>
        İletişim
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        {/* İletişim Bilgileri */}
        <div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            height: 'fit-content'
          }}>
            <h2 style={{ color: '#8B4513', marginBottom: '2rem' }}>İletişim Bilgileri</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  background: '#8B4513', 
                  color: 'white', 
                  padding: '0.75rem', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#333' }}>Telefon</div>
                  <div style={{ color: '#666' }}>0532 123 45 67</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  background: '#8B4513', 
                  color: 'white', 
                  padding: '0.75rem', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#333' }}>E-posta</div>
                  <div style={{ color: '#666' }}>info@ayvalikzeytinyagi.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  background: '#8B4513', 
                  color: 'white', 
                  padding: '0.75rem', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#333' }}>Adres</div>
                  <div style={{ color: '#666' }}>
                    Zeytinlik Mahallesi, Zeytin Sokak No:15<br />
                    Ayvalık, Balıkesir
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  background: '#8B4513', 
                  color: 'white', 
                  padding: '0.75rem', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#333' }}>Çalışma Saatleri</div>
                  <div style={{ color: '#666' }}>
                    Pazartesi - Cuma: 08:00 - 18:00<br />
                    Cumartesi: 09:00 - 16:00<br />
                    Pazar: Kapalı
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Harita */}
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            marginTop: '2rem'
          }}>
            <h3 style={{ color: '#8B4513', marginBottom: '1rem' }}>Konum</h3>
            <div style={{ 
              background: '#f8f9fa', 
              height: '200px', 
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
              border: '1px solid #ddd'
            }}>
              Harita burada görüntülenecek
            </div>
          </div>
        </div>

        {/* İletişim Formu */}
        <div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ color: '#8B4513', marginBottom: '2rem' }}>Mesaj Gönderin</h2>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Adınız ve soyadınız"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: errors.name ? '1px solid #dc3545' : '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.name && (
                  <span style={{ color: '#dc3545', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  E-posta *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ornek@email.com"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: errors.email ? '1px solid #dc3545' : '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.email && (
                  <span style={{ color: '#dc3545', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  Konu *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Mesajınızın konusu"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: errors.subject ? '1px solid #dc3545' : '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.subject && (
                  <span style={{ color: '#dc3545', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.subject}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  Mesaj *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Mesajınızı buraya yazın..."
                  rows={5}
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: errors.message ? '1px solid #dc3545' : '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    resize: 'vertical'
                  }}
                />
                {errors.message && (
                  <span style={{ color: '#dc3545', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.message}
                  </span>
                )}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn" 
                style={{ 
                  width: '100%', 
                  padding: '15px',
                  fontSize: '1.1rem',
                  backgroundColor: isSubmitting ? '#6c757d' : '#8B4513',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* SSS */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ 
          background: 'white', 
          padding: '3rem', 
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#8B4513', marginBottom: '2rem', textAlign: 'center' }}>
            Sıkça Sorulan Sorular
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>
                Zeytinyağlarınız gerçekten doğal mı?
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Evet, tüm zeytinyağlarımız hiçbir kimyasal katkı maddesi kullanılmadan, 
                geleneksel yöntemlerle üretilmektedir.
              </p>
            </div>
            
            <div>
              <h3 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>
                Kargo süresi ne kadar?
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Türkiye'nin her yerine 1-3 iş günü içinde kargo ile gönderim yapıyoruz.
              </p>
            </div>
            
            <div>
              <h3 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>
                Minimum sipariş tutarı var mı?
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Hayır, minimum sipariş tutarı yoktur. İstediğiniz miktarda sipariş verebilirsiniz.
              </p>
            </div>
            
            <div>
              <h3 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>
                Zeytinyağı nasıl saklanmalı?
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Zeytinyağını serin, kuru ve güneş ışığından uzak bir yerde saklayın. 
                Açıldıktan sonra 6 ay içinde tüketilmesi önerilir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 