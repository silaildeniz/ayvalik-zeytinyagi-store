import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';
import manzara1 from '../assets/images/gallery/manzara-1.jpg';
import uretim1 from '../assets/images/gallery/uretim-1.png';
import uretim2 from '../assets/images/gallery/uretim-2.png';
import uretim3 from '../assets/images/gallery/uretim-3.png';
import bal1 from '../assets/images/gallery/bal-1.png';
import bal2 from '../assets/images/gallery/bal-2.png';
import recel1 from '../assets/images/gallery/recel-1.png';
import hasat1 from '../assets/images/gallery/hasat-1.png';
import zeytinlik1 from '../assets/images/gallery/zeytinlik-1.png';
import zeytinlik2 from '../assets/images/gallery/zeytinlik-2.jpg';
import kultur1 from '../assets/images/gallery/kultur-1.jpg';
import sabun1 from '../assets/images/gallery/sabun-1.jpg';

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Gerçek görseller
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Ayvalık Zeytinlikleri",
      description: "Ayvalık'ın bereketli zeytinliklerinin görseli",
      imageUrl: zeytinlik1,
      category: "zeytinlik"
    },
    {
      id: 2,
      title: "Zeytinyağı Üretimi",
      description: "Geleneksel zeytinyağı üretim süreci",
      imageUrl: uretim1,
      category: "uretim"
    },
    {
      id: 3,
      title: "Doğal Bal",
      description: "Arıların doğal ortamda bal üretimi",
      imageUrl: bal1,
      category: "bal"
    },
    {
      id: 4,
      title: "Zeytin Hasadı",
      description: "Geleneksel zeytin toplama yöntemleri",
      imageUrl: hasat1,
      category: "hasat"
    },
    {
      id: 5,
      title: "Organik Reçeller",
      description: "Ev yapımı doğal reçeller",
      imageUrl: recel1,
      category: "recel"
    },
    {
      id: 6,
      title: "Zeytinyağlı Sabunlar",
      description: "Doğal zeytinyağlı sabun üretimi",
      imageUrl: sabun1,
      category: "sabun"
    },
    {
      id: 7,
      title: "Ayvalık Manzarası",
      description: "Ayvalık'ın eşsiz doğal güzellikleri",
      imageUrl: manzara1,
      category: "manzara"
    },
    {
      id: 8,
      title: "Modern Üretim",
      description: "Teknolojik üretim süreçleri",
      imageUrl: uretim2,
      category: "uretim"
    },
    {
      id: 9,
      title: "Zeytin Ağaçları",
      description: "Yüzlerce yıllık zeytin ağaçları",
      imageUrl: zeytinlik2,
      category: "zeytinlik"
    },
    {
      id: 10,
      title: "Kalite Kontrol",
      description: "Her aşamada kalite kontrolü",
      imageUrl: uretim3,
      category: "uretim"
    },
    {
      id: 11,
      title: "Bal Üretimi",
      description: "Arıların doğal ortamda çalışması",
      imageUrl: bal2,
      category: "bal"
    },
    {
      id: 12,
      title: "Ayvalık Kültürü",
      description: "Geleneksel üretim kültürü",
      imageUrl: kultur1,
      category: "kultur"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'zeytinlik', name: 'Zeytinlikler' },
    { id: 'uretim', name: 'Üretim' },
    { id: 'bal', name: 'Bal' },
    { id: 'hasat', name: 'Hasat' },
    { id: 'recel', name: 'Reçel' },
    { id: 'sabun', name: 'Sabun' },
    { id: 'manzara', name: 'Manzara' },
    { id: 'kultur', name: 'Kültür' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleDownload = () => {
    if (!selectedImage) return;
    const link = document.createElement('a');
    link.href = selectedImage.imageUrl;
    link.download = `${selectedImage.title}.jpg`;
    link.click();
  };

  const handleShare = () => {
    if (!selectedImage) return;
    if (navigator.share) {
      navigator.share({
        title: selectedImage.title,
        text: selectedImage.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link kopyalandı!');
    }
  };

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">
        Ayvalık Galeri
      </h1>

      {/* Açıklama */}
      <div className="gallery-description">
        <h2>
          Ayvalık'ın Güzelliklerini Keşfedin
        </h2>
        <p>
          Ayvalık'ın bereketli topraklarını, geleneksel üretim süreçlerini ve doğal güzelliklerini 
          yansıtan bu görseller, dedemizin 50 yıllık deneyimini ve doğaya olan saygısını temsil ediyor.
        </p>
      </div>

      {/* Kategori Filtreleri */}
      <div className="category-filters">
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Galeri Grid */}
      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img 
              src={image.imageUrl} 
              alt={image.title}
              className="gallery-image"
            />
            <div className="gallery-item-info">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sonuç Sayısı */}
      <p className="result-count">
        {filteredImages.length} görsel bulundu
      </p>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Kapat Butonu */}
            <button className="close-btn" onClick={closeLightbox}>
              <X size={30} />
            </button>

            {/* Navigasyon Butonları */}
            <button className="nav-btn prev-btn" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>

            <button className="nav-btn next-btn" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>

            {/* Görsel */}
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title}
              className="lightbox-image"
            />

            {/* Görsel Bilgileri */}
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              
              {/* Aksiyon Butonları */}
              <div className="action-buttons">
                <button className="action-btn download-btn" onClick={handleDownload}>
                  <Download size={16} />
                  İndir
                </button>
                
                <button className="action-btn share-btn" onClick={handleShare}>
                  <Share2 size={16} />
                  Paylaş
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 