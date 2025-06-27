import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Partial<LoginForm>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof LoginForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginForm> = {};

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
      // Demo login - in real app, this would be an API call
      if (formData.email === 'admin@ayvalik.com' && formData.password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify({
          email: formData.email,
          role: 'admin'
        }));
        navigate('/admin');
      } else {
        alert('Geçersiz e-posta veya şifre!');
      }
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
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: '#8B4513', marginBottom: '0.5rem' }}>Giriş Yap</h1>
          <p style={{ color: '#666' }}>Hesabınıza giriş yapın</p>
        </div>

        <form onSubmit={handleSubmit}>
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

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Şifre
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Şifrenizi girin"
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
            {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            Hesabınız yok mu? <Link to="/register" style={{ color: '#8B4513', textDecoration: 'none' }}>Kayıt olun</Link>
          </p>
          
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '8px',
            marginTop: '2rem'
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
              <strong>Demo Giriş:</strong><br />
              E-posta: admin@ayvalik.com<br />
              Şifre: admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 