import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterForm>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const [errors, setErrors] = useState<Partial<RegisterForm>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof RegisterForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ad soyad gereklidir';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Ad soyad en az 2 karakter olmalıdır';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi girin';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Şifre gereklidir';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalıdır';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Şifre tekrarı gereklidir';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifreler eşleşmiyor';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numarası gereklidir';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Geçerli bir telefon numarası girin';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Demo registration - in real app, this would be an API call
      const newUser = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: 'user'
      };
      
      // Store user data (in real app, this would be in database)
      localStorage.setItem('registeredUsers', JSON.stringify([
        ...JSON.parse(localStorage.getItem('registeredUsers') || '[]'),
        newUser
      ]));
      
      alert('Kayıt başarılı! Giriş yapabilirsiniz.');
      navigate('/login');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <div style={{ 
        background: 'white', 
        padding: '3rem', 
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '450px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>Kayıt Ol</h1>
          <p style={{ color: '#666' }}>Yeni hesap oluşturun</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Ad Soyad
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
              E-posta
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
              Telefon
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="05XX XXX XX XX"
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: errors.phone ? '1px solid #dc3545' : '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            {errors.phone && (
              <span style={{ color: '#dc3545', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.phone}
              </span>
            )}
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Şifre
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="En az 6 karakter"
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: errors.password ? '1px solid #dc3545' : '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            {errors.password && (
              <span style={{ color: '#dc3545', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.password}
              </span>
            )}
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Şifre Tekrarı
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Şifrenizi tekrar girin"
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: errors.confirmPassword ? '1px solid #dc3545' : '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            {errors.confirmPassword && (
              <span style={{ color: '#dc3545', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.confirmPassword}
              </span>
            )}
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="btn" 
            style={{ 
              width: '100%', 
              padding: '15px',
              fontSize: '1.1rem',
              backgroundColor: isLoading ? '#6c757d' : '#8B4513',
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? 'Kayıt yapılıyor...' : 'Kayıt Ol'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: '#666' }}>
            Zaten hesabınız var mı? <Link to="/login" style={{ color: '#8B4513', textDecoration: 'none' }}>Giriş yapın</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register; 