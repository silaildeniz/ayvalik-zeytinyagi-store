import React, { useState, useEffect } from 'react';
import { products } from '../data/products';

interface Order {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  items: Array<{
    id: number;
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Örnek siparişler
    const sampleOrders: Order[] = [
      {
        id: 1,
        customerName: "Ahmet Yılmaz",
        customerEmail: "ahmet@email.com",
        customerPhone: "0532 123 45 67",
        customerAddress: "İstanbul, Kadıköy",
        items: [
          { id: 1, name: "Ayvalık Naturel Sızma Zeytinyağı", quantity: 2, price: 85.00 }
        ],
        total: 170.00,
        status: 'pending',
        date: '2024-01-15'
      }
    ];
    setOrders(sampleOrders);
  }, []);

  const updateOrderStatus = (orderId: number, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return '#ffc107';
      case 'processing': return '#17a2b8';
      case 'shipped': return '#007bff';
      case 'delivered': return '#28a745';
      default: return '#6c757d';
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'Beklemede';
      case 'processing': return 'İşleniyor';
      case 'shipped': return 'Kargoda';
      case 'delivered': return 'Teslim Edildi';
      default: return 'Bilinmiyor';
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#8B4513' }}>
        Admin Paneli
      </h1>

      {/* Tab Menüsü */}
      <div style={{ 
        display: 'flex', 
        marginBottom: '2rem',
        background: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
      }}>
        <button 
          onClick={() => setActiveTab('products')}
          style={{ 
            flex: 1, 
            padding: '1rem', 
            border: 'none', 
            background: activeTab === 'products' ? '#8B4513' : 'transparent',
            color: activeTab === 'products' ? 'white' : '#8B4513',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Ürünler
        </button>
        <button 
          onClick={() => setActiveTab('orders')}
          style={{ 
            flex: 1, 
            padding: '1rem', 
            border: 'none', 
            background: activeTab === 'orders' ? '#8B4513' : 'transparent',
            color: activeTab === 'orders' ? 'white' : '#8B4513',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Siparişler
        </button>
      </div>

      {/* Ürünler Tab */}
      {activeTab === 'products' && (
        <div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <h2>Ürün Yönetimi</h2>
            <button className="btn">Yeni Ürün Ekle</button>
          </div>

          <div style={{ 
            background: 'white', 
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>
                    Ürün
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>
                    Kategori
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>
                    Fiyat
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>
                    Stok
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          style={{ 
                            width: '50px', 
                            height: '50px', 
                            objectFit: 'cover',
                            borderRadius: '5px'
                          }}
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/50x50?text=Ürün';
                          }}
                        />
                        <div>
                          <div style={{ fontWeight: 'bold' }}>{product.name}</div>
                          <div style={{ fontSize: '0.9rem', color: '#666' }}>{product.weight}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                      {product.category}
                    </td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                      {product.price.toFixed(2)} ₺
                    </td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                      <span style={{ 
                        color: product.stock > 10 ? '#28a745' : product.stock > 0 ? '#ffc107' : '#dc3545',
                        fontWeight: 'bold'
                      }}>
                        {product.stock}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button 
                          onClick={() => alert('Düzenleme özelliği yakında eklenecek')}
                          style={{ 
                            padding: '4px 8px', 
                            background: '#007bff', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '3px',
                            cursor: 'pointer'
                          }}
                        >
                          Düzenle
                        </button>
                        <button 
                          onClick={() => alert('Silme özelliği yakında eklenecek')}
                          style={{ 
                            padding: '4px 8px', 
                            background: '#dc3545', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '3px',
                            cursor: 'pointer'
                          }}
                        >
                          Sil
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Siparişler Tab */}
      {activeTab === 'orders' && (
        <div>
          <h2 style={{ marginBottom: '2rem' }}>Sipariş Yönetimi</h2>

          <div style={{ 
            background: 'white', 
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>
                    Sipariş No
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>
                    Müşteri
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>
                    Tutar
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>
                    Durum
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>
                    Tarih
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                      #{order.id}
                    </td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                      <div>
                        <div style={{ fontWeight: 'bold' }}>{order.customerName}</div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>{order.customerEmail}</div>
                      </div>
                    </td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                      {order.total.toFixed(2)} ₺
                    </td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        borderRadius: '3px', 
                        background: getStatusColor(order.status),
                        color: 'white',
                        fontSize: '0.9rem'
                      }}>
                        {getStatusText(order.status)}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                      {new Date(order.date).toLocaleDateString('tr-TR')}
                    </td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                      <select 
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                        style={{ 
                          padding: '4px 8px', 
                          borderRadius: '3px', 
                          border: '1px solid #ddd'
                        }}
                      >
                        <option value="pending">Beklemede</option>
                        <option value="processing">İşleniyor</option>
                        <option value="shipped">Kargoda</option>
                        <option value="delivered">Teslim Edildi</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin; 
