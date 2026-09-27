import { Product } from './product.model';

export const PRODUCTS: Product[] = [
  {
    name: 'Ganga Jal',
    category: 'Pooja Essentials',
    description: 'Sacred water traditionally used in Hindu pooja, rituals and spiritual ceremonies.',
    image: 'assets/img/products/ganga-jal.svg',
    badge: 'Pure & Traditional',
    uses: ['Daily pooja', 'Purification rituals', 'Festivals'],
    keyFeatures: ['Traditionally used for pooja and religious rituals', 'Suitable for daily spiritual practices', 'Commonly used for purification rituals', 'Can be used during festivals and special ceremonies', 'Easy to store and use']
  },
  {
    name: 'Peepal Ki Lakdi',
    category: 'Havan Samagri',
    description: 'Traditionally used Peepal wood for havan and sacred fire rituals.',
    image: 'assets/img/products/peepal-ki-lakdi.svg',
    badge: 'Natural',
    uses: ['Havan samagri', 'Sacred fire rituals', 'Festive pooja'],
    keyFeatures: ['Natural wood product', 'Traditionally used in havan rituals', 'Suitable for sacred fire ceremonies', 'Can be included in traditional havan preparations', 'Selected and packed for convenient use']
  },
  {
    name: 'Aam Ki Lakdi',
    category: 'Havan Samagri',
    description: 'Traditional mango wood used as a natural wood component for havan and sacred rituals.',
    image: 'assets/img/products/aam-ki-lakdi.svg',
    badge: 'Natural',
    uses: ['Havan samagri', 'Yagya rituals', 'Daily spiritual practice'],
    keyFeatures: ['Natural mango wood', 'Traditionally used for havan', 'Suitable for religious ceremonies', 'Convenient for traditional fire rituals', 'Natural and simple product']
  },
  {
    name: 'Gau Uple',
    category: 'Havan Samagri',
    description: 'Traditional cow-dung cakes commonly used as part of havan and sacred fire rituals.',
    image: 'assets/img/products/gau-uple.svg',
    badge: 'Traditional',
    uses: ['Havan', 'Dhoop rituals', 'Sacred fire offerings'],
    keyFeatures: ['Traditional havan ingredient', 'Naturally prepared product', 'Commonly used in sacred fire rituals', 'Suitable for traditional pooja ceremonies', 'Conveniently packed for ritual use']
  },
  {
    name: 'Mitti Ke Diye',
    category: 'Pooja Essentials',
    description: 'Traditional clay diyas for pooja, festivals and devotional celebrations.',
    image: 'assets/img/products/mitti-ke-diye.svg',
    badge: 'Eco-Friendly',
    uses: ['Festivals', 'Evening diya', 'Celebratory pooja'],
    keyFeatures: ['Made from traditional clay', 'Suitable for daily pooja', 'Ideal for Diwali and festive occasions', 'Can be used with cotton wicks and oil or ghee', 'Traditional and reusable for multiple occasions when handled properly']
  }
];

export const UPCOMING_PRODUCTS: Product[] = [
  { name: 'Cotton Batti', category: 'Diya / Pooja Essential', description: 'Soft cotton wicks prepared for a steady, peaceful diya flame.', image: 'assets/img/products/upcoming.svg', badge: 'Coming Soon', uses: ['Daily diya', 'Aarti', 'Festivals'], isUpcoming: true },
  { name: 'Puja Thali', category: 'Pooja Accessories', description: 'A thoughtfully arranged thali for keeping your everyday offerings together.', image: 'assets/img/products/upcoming.svg', badge: 'Coming Soon', uses: ['Daily pooja', 'Festivals', 'Gifting'], isUpcoming: true },
  { name: 'Kumkum', category: 'Pooja Essential', description: 'A traditional vermilion offering for auspicious rituals and celebrations.', image: 'assets/img/products/upcoming.svg', badge: 'Coming Soon', uses: ['Tilak', 'Puja rituals', 'Festivals'], isUpcoming: true },
  { name: 'Akshat (Chawal)', category: 'Pooja Essential', description: 'Clean rice grains used as a symbol of abundance in sacred offerings.', image: 'assets/img/products/upcoming.svg', badge: 'Coming Soon', uses: ['Offerings', 'Tilak rituals', 'Kalash pooja'], isUpcoming: true },
  { name: 'Mauli / Kalava', category: 'Sacred Thread', description: 'Traditional red and yellow sacred thread for blessings and protection.', image: 'assets/img/products/upcoming.svg', badge: 'Coming Soon', uses: ['Sankalp', 'Festivals', 'Blessings'], isUpcoming: true },
  { name: 'Herbal Dhoop', category: 'Natural / Fragrance', description: 'A naturally fragrant dhoop blend to bring warmth and calm to your space.', image: 'assets/img/products/upcoming.svg', badge: 'Coming Soon', uses: ['Morning rituals', 'Meditation', 'Evening pooja'], isUpcoming: true },
  { name: 'Tulsi Mala', category: 'Mala / Spiritual', description: 'A traditional Tulsi mala for prayer, meditation and mindful practice.', image: 'assets/img/products/upcoming.svg', badge: 'Coming Soon', uses: ['Japa', 'Meditation', 'Daily prayer'], isUpcoming: true }
];
