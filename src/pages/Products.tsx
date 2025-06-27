import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products, categories, Product } from '../data/products';

const Products: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let filtered = products;

    // Kategori filtresi
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Arama filtresi
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm]);

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Ürün sepete eklendi!');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#8B4513' }}>
        Ürünlerimiz
      </h1>

      {/* Filtreler */}
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '10px', 
        marginBottom: '2rem',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Kategori:
            </label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
            >
              <option value="all">Tümü</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div style={{ flex: 1, minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Arama:
            </label>
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '8px', 
                borderRadius: '5px', 
                border: '1px solid #ddd' 
              }}
            />
          </div>
        </div>
      </div>

      {/* Ürün Sayısı */}
      <p style={{ marginBottom: '1rem', color: '#666' }}>
        {filteredProducts.length} ürün bulundu
      </p>

      {/* Ürün Grid */}
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
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
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                  {product.description.substring(0, 100)}...
                </p>
                <p className="product-price">{product.price.toFixed(2)} ₺</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link to={`/product/${product.id}`} className="btn" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>
                    İncele
                  </Link>
                  <button 
                    onClick={() => addToCart(product)}
                    className="btn" 
                    style={{ 
                      fontSize: '0.9rem', 
                      padding: '8px 20px',
                      backgroundColor: '#28a745'
                    }}
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem', 
          background: 'white', 
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h3>Ürün bulunamadı</h3>
          <p>Arama kriterlerinizi değiştirmeyi deneyin.</p>
        </div>
      )}
    </div>
  );
};

export default Products; 