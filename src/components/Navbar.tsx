import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Cart item count'u güncelle
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const count = cart.reduce((total: number, item: any) => total + item.quantity, 0);
      setCartItemCount(count);
    };

    // Login durumunu kontrol et
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loginStatus === 'true');
    };

    updateCartCount();
    checkLoginStatus();

    // Storage event listener ekle
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav style={{ 
      background: 'white', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px'
      }}>
        {/* Logo */}
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: '#8B4513',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          🫒 Ayvalık Zeytinyağı
        </Link>

        {/* Desktop Menu */}
        <div style={{ 
          display: { xs: 'none', md: 'flex' } as any, 
          alignItems: 'center', 
          gap: '2rem' 
        }}>
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: isActive('/') ? '#8B4513' : '#666',
              fontWeight: isActive('/') ? 'bold' : 'normal',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}
          >
            Ana Sayfa
          </Link>
          
          <Link 
            to="/products" 
            style={{ 
              textDecoration: 'none', 
              color: isActive('/products') ? '#8B4513' : '#666',
              fontWeight: isActive('/products') ? 'bold' : 'normal',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}
          >
            Ürünler
          </Link>
          
          <Link 
            to="/gallery" 
            style={{ 
              textDecoration: 'none', 
              color: isActive('/gallery') ? '#8B4513' : '#666',
              fontWeight: isActive('/gallery') ? 'bold' : 'normal',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}
          >
            Galeri
          </Link>
          
          <Link 
            to="/about" 
            style={{ 
              textDecoration: 'none', 
              color: isActive('/about') ? '#8B4513' : '#666',
              fontWeight: isActive('/about') ? 'bold' : 'normal',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}
          >
            Hakkımızda
          </Link>
          
          <Link 
            to="/contact" 
            style={{ 
              textDecoration: 'none', 
              color: isActive('/contact') ? '#8B4513' : '#666',
              fontWeight: isActive('/contact') ? 'bold' : 'normal',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}
          >
            İletişim
          </Link>
        </div>

        {/* Right Side Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Cart */}
          <Link to="/cart" style={{ position: 'relative', textDecoration: 'none' }}>
            <ShoppingCart 
              size={24} 
              color="#8B4513" 
              style={{ cursor: 'pointer' }}
            />
            {cartItemCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#dc3545',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Admin/Login */}
          {isLoggedIn ? (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#8B4513'
                }}
              >
                <User size={20} />
                Admin
              </button>
              
              {isMenuOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  minWidth: '150px',
                  zIndex: 1000
                }}>
                  <Link 
                    to="/admin" 
                    style={{
                      display: 'block',
                      padding: '0.75rem 1rem',
                      textDecoration: 'none',
                      color: '#333',
                      borderBottom: '1px solid #eee'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Paneli
                  </Link>
                  <button
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#dc3545',
                      textAlign: 'left'
                    }}
                  >
                    Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link 
              to="/login" 
              style={{ 
                textDecoration: 'none', 
                color: '#8B4513',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <User size={20} />
              Giriş
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: { xs: 'block', md: 'none' } as any,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            {isMenuOpen ? <X size={24} color="#8B4513" /> : <Menu size={24} color="#8B4513" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          display: { xs: 'block', md: 'none' } as any,
          background: 'white',
          borderTop: '1px solid #eee',
          padding: '1rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link 
              to="/" 
              style={{ 
                textDecoration: 'none', 
                color: isActive('/') ? '#8B4513' : '#666',
                fontWeight: isActive('/') ? 'bold' : 'normal',
                padding: '0.5rem 0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            
            <Link 
              to="/products" 
              style={{ 
                textDecoration: 'none', 
                color: isActive('/products') ? '#8B4513' : '#666',
                fontWeight: isActive('/products') ? 'bold' : 'normal',
                padding: '0.5rem 0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Ürünler
            </Link>
            
            <Link 
              to="/gallery" 
              style={{ 
                textDecoration: 'none', 
                color: isActive('/gallery') ? '#8B4513' : '#666',
                fontWeight: isActive('/gallery') ? 'bold' : 'normal',
                padding: '0.5rem 0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Galeri
            </Link>
            
            <Link 
              to="/about" 
              style={{ 
                textDecoration: 'none', 
                color: isActive('/about') ? '#8B4513' : '#666',
                fontWeight: isActive('/about') ? 'bold' : 'normal',
                padding: '0.5rem 0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            
            <Link 
              to="/contact" 
              style={{ 
                textDecoration: 'none', 
                color: isActive('/contact') ? '#8B4513' : '#666',
                fontWeight: isActive('/contact') ? 'bold' : 'normal',
                padding: '0.5rem 0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 