import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus } from 'lucide-react';
import { Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const updatedCart = cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Sepetiniz boş</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          Alışverişe başlamak için ürünlerimize göz atın.
        </p>
        <Link to="/products" className="btn">Ürünlere Git</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#8B4513' }}>
        Alışveriş Sepeti ({getTotalItems()} ürün)
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '2fr 1fr', 
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Sepet Ürünleri */}
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '10px',
              marginBottom: '1rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              display: 'grid',
              gridTemplateColumns: '100px 1fr auto',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  objectFit: 'cover',
                  borderRadius: '5px'
                }}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/100x100?text=Ürün';
                }}
              />
              
              <div>
                <h3 style={{ marginBottom: '0.5rem', color: '#8B4513' }}>{item.name}</h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>{item.weight}</p>
                <p style={{ fontWeight: 'bold', color: '#8B4513' }}>
                  {item.price.toFixed(2)} ₺
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{ 
                      padding: '4px 8px', 
                      border: '1px solid #ddd', 
                      background: 'white',
                      borderRadius: '3px',
                      cursor: 'pointer'
                    }}
                  >
                    <Minus size={12} />
                  </button>
                  <span style={{ minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{ 
                      padding: '4px 8px', 
                      border: '1px solid #ddd', 
                      background: 'white',
                      borderRadius: '3px',
                      cursor: 'pointer'
                    }}
                  >
                    <Plus size={12} />
                  </button>
                </div>
                
                <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {(item.price * item.quantity).toFixed(2)} ₺
                </p>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ 
                    padding: '4px 8px', 
                    border: 'none', 
                    background: '#dc3545',
                    color: 'white',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Trash2 size={12} />
                  Kaldır
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sepet Özeti */}
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '10px',
          height: 'fit-content',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#8B4513', marginBottom: '1.5rem' }}>Sepet Özeti</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Ara Toplam:</span>
              <span>{getTotalPrice().toFixed(2)} ₺</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Kargo:</span>
              <span>Ücretsiz</span>
            </div>
            <hr style={{ margin: '1rem 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
              <span>Toplam:</span>
              <span>{getTotalPrice().toFixed(2)} ₺</span>
            </div>
          </div>

          <Link to="/checkout" className="btn" style={{ 
            width: '100%', 
            textAlign: 'center',
            fontSize: '1.1rem',
            padding: '15px'
          }}>
            Ödemeye Geç
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart; 