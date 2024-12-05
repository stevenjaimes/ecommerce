export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Ceramic Vase',
    description: 'Elegant ceramic vase perfect for any modern home decor',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80',
    category: 'Decor'
  },
  {
    id: '2',
    name: 'Minimalist Table Lamp',
    description: 'Contemporary LED table lamp with adjustable brightness',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80',
    category: 'Lighting'
  },
  {
    id: '3',
    name: 'Organic Cotton Throw Pillow',
    description: 'Soft and comfortable throw pillow made with organic materials',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?auto=format&fit=crop&q=80',
    category: 'Textiles'
  },
  {
    id: '4',
    name: 'Bamboo Storage Basket',
    description: 'Eco-friendly storage solution for any room',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&q=80',
    category: 'Storage'
  },
  {
    id: '5',
    name: 'Handcrafted Wall Clock',
    description: 'Modern wall clock with silent mechanism',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1516139008210-96e45dccd83b?auto=format&fit=crop&q=80',
    category: 'Decor'
  },
  {
    id: '6',
    name: 'Natural Fiber Rug',
    description: 'Durable and stylish area rug made from natural materials',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80',
    category: 'Textiles'
  }
];