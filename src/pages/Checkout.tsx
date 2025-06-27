import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });
  const [errors, setErrors] = useState<Partial<CheckoutForm>>({});

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length === 0) {
      navigate('/cart');
      return;
    }
    setCartItems(cart);
  }, [navigate]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof CheckoutForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<CheckoutForm> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Ad gereklidir';
    if (!formData.lastName.trim()) newErrors.lastName = 'Soyad gereklidir';
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi girin';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefon gereklidir';
    if (!formData.address.trim()) newErrors.address = 'Adres gereklidir';
    if (!formData.city.trim()) newErrors.city = 'Şehir gereklidir';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Posta kodu gereklidir';
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Kart numarası gereklidir';
    if (!formData.cardExpiry.trim()) newErrors.cardExpiry = 'Son kullanma tarihi gereklidir';
    if (!formData.cardCvv.trim()) newErrors.cardCvv = 'CVV gereklidir';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Simulate order processing
    const order = {
      id: Date.now(),
      customerName: `${formData.firstName} ${formData.lastName}`,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      customerAddress: `${formData.address}, ${formData.city} ${formData.zipCode}`,
      items: cartItems,
      total: getTotalPrice(),
      status: 'pending' as const,
      date: new Date().toISOString().split('T')[0]
    };

    // Save order to localStorage (in a real app, this would go to a database)
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem('cart');

    alert('Siparişiniz başarıyla alındı! Sipariş numaranız: #' + order.id);
    navigate('/');
  };

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#8B4513' }}>
        Ödeme
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '3rem',
        marginBottom: '2rem'
      }}>
        {/* Ödeme Formu */}
        <div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ color: '#8B4513', marginBottom: '1.5rem' }}>Teslimat Bilgileri</h2>
            
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Ad *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    style={{ 
                      width: '100%', 
                      padding: '10px', 
                      border: errors.firstName ? '1px solid #dc3545' : '1px solid #ddd',
                      borderRadius: '5px'
                    }}
                  />
                  {errors.firstName && (
                    <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.firstName}</span>
                  )}
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Soyad *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    style={{ 
                      width: '100%', 
                      padding: '10px', 
                      border: errors.lastName ? '1px solid #dc3545' : '1px solid #ddd',
                      borderRadius: '5px'
                    }}
                  />
                  {errors.lastName && (
                    <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.lastName}</span>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  E-posta *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ 
                    width: '100%', 
                    padding: '10px', 
                    border: errors.email ? '1px solid #dc3545' : '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                />
                {errors.email && (
                  <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.email}</span>
                )}
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{ 
                    width: '100%', 
                    padding: '10px', 
                    border: errors.phone ? '1px solid #dc3545' : '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                />
                {errors.phone && (
                  <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.phone}</span>
                )}
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Adres *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange(e as any)}
                  rows={3}
                  style={{ 
                    width: '100%', 
                    padding: '10px', 
                    border: errors.address ? '1px solid #dc3545' : '1px solid #ddd',
                    borderRadius: '5px',
                    resize: 'vertical'
                  }}
                />
                {errors.address && (
                  <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.address}</span>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Şehir *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    style={{ 
                      width: '100%', 
                      padding: '10px', 
                      border: errors.city ? '1px solid #dc3545' : '1px solid #ddd',
                      borderRadius: '5px'
                    }}
                  />
                  {errors.city && (
                    <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.city}</span>
                  )}
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Posta Kodu *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    style={{ 
                      width: '100%', 
                      padding: '10px', 
                      border: errors.zipCode ? '1px solid #dc3545' : '1px solid #ddd',
                      borderRadius: '5px'
                    }}
                  />
                  {errors.zipCode && (
                    <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.zipCode}</span>
                  )}
                </div>
              </div>

              <h2 style={{ color: '#8B4513', marginBottom: '1.5rem' }}>Ödeme Bilgileri</h2>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Kart Numarası *
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  style={{ 
                    width: '100%', 
                    padding: '10px', 
                    border: errors.cardNumber ? '1px solid #dc3545' : '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                />
                {errors.cardNumber && (
                  <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.cardNumber}</span>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Son Kullanma Tarihi *
                  </label>
                  <input
                    type="text"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    style={{ 
                      width: '100%', 
                      padding: '10px', 
                      border: errors.cardExpiry ? '1px solid #dc3545' : '1px solid #ddd',
                      borderRadius: '5px'
                    }}
                  />
                  {errors.cardExpiry && (
                    <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.cardExpiry}</span>
                  )}
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    CVV *
                  </label>
                  <input
                    type="text"
                    name="cardCvv"
                    value={formData.cardCvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    style={{ 
                      width: '100%', 
                      padding: '10px', 
                      border: errors.cardCvv ? '1px solid #dc3545' : '1px solid #ddd',
                      borderRadius: '5px'
                    }}
                  />
                  {errors.cardCvv && (
                    <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.cardCvv}</span>
                  )}
                </div>
              </div>

              <button 
                type="submit" 
                className="btn" 
                style={{ 
                  width: '100%', 
                  fontSize: '1.1rem',
                  padding: '15px',
                  backgroundColor: '#28a745'
                }}
              >
                Siparişi Tamamla ({getTotalPrice().toFixed(2)} ₺)
              </button>
            </form>
          </div>
        </div>

        {/* Sipariş Özeti */}
        <div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px',
            height: 'fit-content',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#8B4513', marginBottom: '1.5rem' }}>Sipariş Özeti</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              {cartItems.map((item) => (
                <div key={item.id} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                      {item.quantity} x {item.price.toFixed(2)} ₺
                    </div>
                  </div>
                  <div style={{ fontWeight: 'bold' }}>
                    {(item.price * item.quantity).toFixed(2)} ₺
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '2px solid #8B4513', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Ara Toplam:</span>
                <span>{getTotalPrice().toFixed(2)} ₺</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Kargo:</span>
                <span>Ücretsiz</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
                <span>Toplam:</span>
                <span>{getTotalPrice().toFixed(2)} ₺</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 