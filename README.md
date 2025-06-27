# Ayvalık Zeytinyağı E-Ticaret Sitesi

## �� Proje Hakkında

Bu proje, Ayvalık'ın geleneksel zeytinyağı üretimini modern e-ticaret teknolojileriyle buluşturan React tabanlı bir web uygulamasıdır. Dedemizin 50 yıllık deneyimini yansıtan doğal ürünleri dijital platformda sunuyoruz.

## �� Özellikler

### ��️ E-Ticaret Özellikleri
- **Ürün Kataloğu**: Zeytinyağı, bal, reçel, sabun kategorileri
- **Ürün Detayları**: Detaylı ürün bilgileri ve müşteri yorumları
- **Sepet Yönetimi**: LocalStorage tabanlı sepet sistemi
- **Ödeme Sistemi**: Form validasyonlu checkout süreci
- **Arama ve Filtreleme**: Kategori ve fiyat bazlı filtreleme

### �� Kullanıcı Yönetimi
- **Kayıt Olma**: Tam form validasyonlu kayıt sistemi
- **Giriş Yapma**: Güvenli kullanıcı girişi
- **Admin Paneli**: Ürün ve sipariş yönetimi

### �� Tasarım ve UX
- **Modern Arayüz**: React + TypeScript ile geliştirilmiş
- **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu
- **Galeri Bölümü**: Ayvalık'tan görseller ve lightbox modal
- **Smooth Animasyonlar**: Hover efektleri ve geçişler

## ��️ Teknolojiler

### Frontend
- **React 18** - Modern UI framework
- **TypeScript** - Tip güvenliği
- **Vite** - Hızlı build tool
- **React Router** - Sayfa yönlendirme
- **Lucide React** - İkon kütüphanesi

### Styling
- **CSS3** - Modern styling
- **Flexbox/Grid** - Responsive layout
- **CSS Animations** - Smooth transitions

### Veri Yönetimi
- **LocalStorage** - Kullanıcı verileri ve sepet
- **TypeScript Interfaces** - Tip tanımları

## �� Proje Yapısı

```
ayvalik-zeytinyagi/
├── src/
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   │   ├── Navbar.tsx      # Navigasyon menüsü
│   │   └── Footer.tsx      # Alt bilgi
│   ├── pages/              # Sayfa bileşenleri
│   │   ├── Home.tsx        # Ana sayfa
│   │   ├── Products.tsx    # Ürün listesi
│   │   ├── ProductDetail.tsx # Ürün detayı
│   │   ├── Cart.tsx        # Sepet
│   │   ├── Checkout.tsx    # Ödeme
│   │   ├── Login.tsx       # Giriş
│   │   ├── Register.tsx    # Kayıt
│   │   ├── Admin.tsx       # Admin paneli
│   │   ├── About.tsx       # Hakkımızda
│   │   ├── Contact.tsx     # İletişim
│   │   └── Gallery.tsx     # Galeri
│   ├── data/               # Veri dosyaları
│   │   └── products.ts     # Ürün verileri
│   ├── assets/             # Statik dosyalar
│   │   └── images/         # Görseller
│   ├── types/              # TypeScript tip tanımları
│   │   └── images.d.ts     # Resim import tipleri
│   ├── App.tsx             # Ana uygulama
│   ├── App.css             # Ana stiller
│   └── main.tsx            # Giriş noktası
├── public/                 # Statik dosyalar
├── package.json            # Bağımlılıklar
├── vite.config.ts          # Vite konfigürasyonu
└── tsconfig.json           # TypeScript konfigürasyonu
```

## 🎯 Sayfalar ve Özellikler

### �� Ana Sayfa (Home)
- Hero section ile etkileyici giriş
- Öne çıkan ürünler
- Ayvalık'tan görseller galerisi
- Hakkımızda kısa tanıtım
- Özellikler bölümü

### ��️ Ürünler (Products)
- Kategori filtreleme
- Fiyat aralığı filtreleme
- Arama fonksiyonu
- Responsive grid layout
- Ürün kartları

### 📦 Ürün Detayı (ProductDetail)
- Detaylı ürün bilgileri
- Müşteri yorumları
- Sepete ekleme
- İlgili ürünler

### 🛒 Sepet (Cart)
- Ürün listesi
- Miktar güncelleme
- Toplam hesaplama
- Sepeti temizleme

### �� Ödeme (Checkout)
- Form validasyonu
- Adres bilgileri
- Ödeme yöntemi seçimi
- Sipariş özeti

### 👤 Kullanıcı İşlemleri
- **Giriş (Login)**: E-posta ve şifre ile giriş
- **Kayıt (Register)**: Yeni kullanıcı kaydı
- **Admin Panel**: Ürün ve sipariş yönetimi

### �� Galeri (Gallery)
- Kategori filtreleme
- Lightbox modal
- İndirme ve paylaşım
- Responsive grid

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Ana Renk**: #8B4513 (Kahverengi)
- **İkincil Renk**: #A0522D (Açık kahverengi)
- **Arka Plan**: #fafafa (Açık gri)
- **Metin**: #333 (Koyu gri)

### Tipografi
- **Font**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Başlıklar**: Bold, 2.2rem - 3.5rem
- **Metin**: Normal, 1rem - 1.1rem

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Kurulum
```bash
# Projeyi klonlayın
git clone [repository-url]
cd ayvalik-zeytinyagi

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

### Build
```bash
# Production build
npm run build

# Preview build
npm run preview
```

## �� Konfigürasyon

### Vite Konfigürasyonu
- Port: 3000
- Auto-open browser
- React plugin

### TypeScript Konfigürasyonu
- Strict mode aktif
- ES2020 target
- React JSX desteği

## 📱 Mobil Uyumluluk

### Responsive Özellikler
- Mobil-first yaklaşım
- Touch-friendly butonlar
- Optimized image loading
- Collapsible navigation
- Mobile-optimized forms

### Performans
- Lazy loading images
- Optimized bundle size
- Fast refresh
- Efficient re-renders

## 🔒 Güvenlik

### Kullanıcı Verileri
- LocalStorage encryption
- Form validation
- XSS protection
- Input sanitization

### Admin Erişimi
- Role-based access
- Session management
- Secure routing

## �� Gelecek Özellikler

### Planlanan Geliştirmeler
- [ ] Backend API entegrasyonu
- [ ] Gerçek ödeme sistemi
- [ ] Kullanıcı profili yönetimi
- [ ] Sipariş takip sistemi
- [ ] Bildirim sistemi
- [ ] Çoklu dil desteği
- [ ] PWA desteği
- [ ] SEO optimizasyonu

## �� İletişim

Bu proje, Ayvalık'ın geleneksel zeytinyağı üretimini modern teknolojilerle buluşturmayı amaçlamaktadır. Dedemizin 50 yıllık deneyimini dijital platformda yaşatıyoruz.

---

**Teknolojiler**: React, TypeScript, Vite, CSS3  
**Tasarım**: Modern, Responsive, User-Friendly  
**Hedef**: Geleneksel üretimi dijitalleştirmek
