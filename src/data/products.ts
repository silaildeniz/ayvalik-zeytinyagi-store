import zeytinyagi1 from '../assets/images/zeytinyagi-1.png';
import zeytinyagi2 from '../assets/images/zeytinyagi-2.jpg';
import bal1 from '../assets/images/bal-1.png';
import bal2 from '../assets/images/gallery/bal-2.png';
import recel1 from '../assets/images/recel-1.png';
import recel2 from '../assets/images/recel-2.png';
import sabun1 from '../assets/images/sabun-1.png';
import sabun2 from '../assets/images/sabun-2.png';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  rating: number;
  weight: string;
  reviews: Review[];
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ayvalık Naturel Sızma Zeytinyağı",
    category: "zeytinyagi",
    price: 85.00,
    description: "Ayvalık'ın bereketli topraklarında yetişen zeytinlerden elde edilen, soğuk sıkım naturel sızma zeytinyağı.",
    image: zeytinyagi1,
    stock: 50,
    rating: 4.8,
    weight: "500ml",
    reviews: [
      {
        id: 1,
        user: "Ahmet Yılmaz",
        rating: 5,
        comment: "Harika bir zeytinyağı! Gerçekten doğal ve lezzetli."
      }
    ]
  },
  {
    id: 2,
    name: "Organik Çam Balı",
    category: "bal",
    price: 120.00,
    description: "Ayvalık'ın çam ormanlarında üretilen organik çam balı. Doğal şifa kaynağı.",
    image: bal1,
    stock: 30,
    rating: 4.9,
    weight: "1kg",
    reviews: []
  },
  {
    id: 3,
    name: "İncir Reçeli",
    category: "recel",
    price: 45.00,
    description: "Taze incirlerden yapılan ev yapımı reçel. Şekersiz ve doğal.",
    image: recel1,
    stock: 25,
    rating: 4.7,
    weight: "500gr",
    reviews: []
  },
  {
    id: 4,
    name: "Zeytinyağlı Sabun",
    category: "sabun",
    price: 35.00,
    description: "Zeytinyağından üretilen doğal sabun. Cildi besler ve korur.",
    image: sabun1,
    stock: 40,
    rating: 4.6,
    weight: "100gr",
    reviews: []
  },
  {
    id: 5,
    name: "Erken Hasat Zeytinyağı",
    category: "zeytinyagi",
    price: 95.00,
    description: "Erken hasat edilen zeytinlerden üretilen özel zeytinyağı. Daha yoğun aroma ve lezzet.",
    image: zeytinyagi2,
    stock: 20,
    rating: 4.9,
    weight: "500ml",
    reviews: []
  },
  {
    id: 6,
    name: "Çiçek Balı",
    category: "bal",
    price: 110.00,
    description: "Çeşitli çiçeklerden elde edilen doğal çiçek balı. Hafif ve aromatik.",
    image: bal2,
    stock: 35,
    rating: 4.8,
    weight: "1kg",
    reviews: []
  },
  {
    id: 7,
    name: "Kayısı Reçeli",
    category: "recel",
    price: 40.00,
    description: "Taze kayısılardan yapılan ev yapımı reçel. Doğal ve lezzetli.",
    image: recel2,
    stock: 30,
    rating: 4.5,
    weight: "500gr",
    reviews: []
  },
  {
    id: 8,
    name: "Lavanta Sabunu",
    category: "sabun",
    price: 40.00,
    description: "Lavanta özlü zeytinyağlı sabun. Rahatlatıcı etkisi ile bilinir.",
    image: sabun2,
    stock: 25,
    rating: 4.7,
    weight: "100gr",
    reviews: []
  }
];

export const categories: Category[] = [
  {
    id: "zeytinyagi",
    name: "Zeytinyağı",
    description: "Ayvalık'ın meşhur zeytinyağları"
  },
  {
    id: "bal",
    name: "Bal",
    description: "Doğal ve organik ballar"
  },
  {
    id: "recel",
    name: "Reçel",
    description: "Ev yapımı reçeller"
  },
  {
    id: "sabun",
    name: "Sabun",
    description: "Zeytinyağlı doğal sabunlar"
  }
]; 
