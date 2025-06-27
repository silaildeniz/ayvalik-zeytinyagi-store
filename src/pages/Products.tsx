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
    <div className="products-page">
      <h1 className="page-title">
        Ürünlerimiz
      </h1>

      {/* Filtreler */}
      <div className="filters-section">
        <div className="filters-container">
          <div className="filter-group">
            <label className="filter-label">
              Kategori:
            </label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              <option value="all">Tümü</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group search-group">
            <label className="filter-label">
              Arama:
            </label>
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Ürün Sayısı */}
      <p className="product-count">
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
                <p className="product-description">
                  {product.description.substring(0, 100)}...
                </p>
                <p className="product-price">{product.price.toFixed(2)} ₺</p>
                <div className="product-actions">
                  <Link to={`/product/${product.id}`} className="btn product-btn">
                    İncele
                  </Link>
                  <button 
                    onClick={() => addToCart(product)}
                    className="btn product-btn add-to-cart-btn"
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-products">
          <h3>Ürün bulunamadı</h3>
          <p>Arama kriterlerinizi değiştirmeyi deneyin.</p>
        </div>
      )}
    </div>
  );
};

export default Products; 
