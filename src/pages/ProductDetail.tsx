import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { products, Product } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find((p: Product) => p.id === parseInt(id!));
    setProduct(foundProduct || null);
  }, [id]);

  const addToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${quantity} adet ${product.name} sepete eklendi!`);
  };

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Ürün bulunamadı</h2>
        <Link to="/products" className="btn">Ürünlere Dön</Link>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        fill={i < rating ? '#FFD700' : 'none'} 
        color="#FFD700" 
      />
    ));
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/products" style={{ color: '#8B4513', textDecoration: 'none' }}>
          ← Ürünlere Dön
        </Link>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        {/* Ürün Görseli */}
        <div>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              width: '100%', 
              height: '400px', 
              objectFit: 'cover',
              borderRadius: '10px'
            }}
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Ürün+Görseli';
            }}
          />
        </div>

        {/* Ürün Bilgileri */}
        <div>
          <h1 style={{ color: '#8B4513', marginBottom: '1rem' }}>{product.name}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            {renderStars(product.rating)}
            <span style={{ marginLeft: '0.5rem', color: '#666' }}>
              ({product.rating}/5)
            </span>
          </div>

          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8B4513', marginBottom: '1rem' }}>
            {product.price.toFixed(2)} ₺
          </p>

          <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '2rem' }}>
            {product.description}
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <p><strong>Stok:</strong> {product.stock} adet</p>
            <p><strong>Ağırlık:</strong> {product.weight}</p>
          </div>

          {/* Adet Seçimi */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Adet:
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ 
                  padding: '8px 12px', 
                  border: '1px solid #ddd', 
                  background: 'white',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                -
              </button>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{quantity}</span>
              <button 
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                style={{ 
                  padding: '8px 12px', 
                  border: '1px solid #ddd', 
                  background: 'white',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Sepete Ekle Butonu */}
          <button 
            onClick={addToCart}
            className="btn" 
            style={{ 
              fontSize: '1.1rem', 
              padding: '15px 30px',
              backgroundColor: '#28a745',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            disabled={product.stock === 0}
          >
            <ShoppingCart size={20} />
            Sepete Ekle
          </button>

          {product.stock === 0 && (
            <p style={{ color: '#dc3545', marginTop: '1rem' }}>
              Bu ürün şu anda stokta yok.
            </p>
          )}
        </div>
      </div>

      {/* Kullanıcı Yorumları */}
      {product.reviews && product.reviews.length > 0 && (
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#8B4513', marginBottom: '1rem' }}>Kullanıcı Yorumları</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {product.reviews.map((review) => (
              <div key={review.id} style={{ 
                border: '1px solid #eee', 
                padding: '1rem', 
                borderRadius: '5px' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>{review.user}</strong>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p style={{ color: '#666' }}>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail; 