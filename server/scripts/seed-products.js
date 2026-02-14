require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");
const Feature = require("../models/Feature");

const sampleProducts = [
  // Nike Products
  {
    image: "https://picsum.photos/500/500?id=10",
    title: "Nike Air Max 90",
    description:
      "Classic Nike Air Max 90 sneakers with superior comfort and style",
    category: "footwear",
    brand: "nike",
    price: 150,
    salePrice: 120,
    totalStock: 50,
    averageReview: 4.5,
  },
  {
    image: "https://picsum.photos/500/500?id=11",
    title: "Nike Pro Dri-FIT T-Shirt",
    description: "Breathable Nike Pro Dri-FIT training t-shirt",
    category: "men",
    brand: "nike",
    price: 45,
    salePrice: 35,
    totalStock: 100,
    averageReview: 4.3,
  },
  {
    image: "https://picsum.photos/500/500?id=12",
    title: "Nike Sportswear Hoodie",
    description: "Comfortable Nike Sportswear hoodie for casual wear",
    category: "men",
    brand: "nike",
    price: 85,
    salePrice: 65,
    totalStock: 60,
    averageReview: 4.4,
  },

  // Adidas Products
  {
    image: "https://picsum.photos/500/500?id=20",
    title: "Adidas Ultra Boost",
    description:
      "Premium Adidas Ultra Boost running shoes with Boost technology",
    category: "footwear",
    brand: "adidas",
    price: 180,
    salePrice: 145,
    totalStock: 45,
    averageReview: 4.6,
  },
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Adidas Performance Shorts",
    description: "Adidas Performance shorts with moisture-wicking fabric",
    category: "men",
    brand: "adidas",
    price: 55,
    salePrice: 40,
    totalStock: 80,
    averageReview: 4.2,
  },
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Adidas Essentials T-Shirt",
    description: "Classic Adidas Essentials t-shirt in multiple colors",
    category: "men",
    brand: "adidas",
    price: 30,
    salePrice: 20,
    totalStock: 150,
    averageReview: 4.1,
  },

  // Puma Products
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Puma RS-X Sneaker",
    description: "Retro-inspired Puma RS-X sneaker with modern design",
    category: "footwear",
    brand: "puma",
    price: 95,
    salePrice: 75,
    totalStock: 55,
    averageReview: 4.3,
  },
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Puma Performance Tee",
    description: "Lightweight Puma performance t-shirt",
    category: "men",
    brand: "puma",
    price: 35,
    salePrice: 25,
    totalStock: 120,
    averageReview: 4.0,
  },

  // Zara Products
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Zara Basic T-Shirt",
    description: "Minimalist Zara basic t-shirt in white and black",
    category: "men",
    brand: "zara",
    price: 25,
    salePrice: 15,
    totalStock: 200,
    averageReview: 4.2,
  },
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Zara Casual Blazer",
    description: "Modern casual blazer from Zara's collection",
    category: "men",
    brand: "zara",
    price: 120,
    salePrice: 90,
    totalStock: 40,
    averageReview: 4.4,
  },
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Zara Denim Jeans",
    description: "Comfortable and stylish Zara denim jeans",
    category: "men",
    brand: "zara",
    price: 70,
    salePrice: 50,
    totalStock: 90,
    averageReview: 4.3,
  },

  // H&M Products
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "H&M Casual Shirt",
    description: "Versatile H&M casual shirt for everyday wear",
    category: "men",
    brand: "h&m",
    price: 35,
    salePrice: 25,
    totalStock: 150,
    averageReview: 4.1,
  },
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "H&M Sweater",
    description: "Cozy H&M sweater in various colors",
    category: "men",
    brand: "h&m",
    price: 50,
    salePrice: 35,
    totalStock: 100,
    averageReview: 4.0,
  },

  // Levi's Products
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Levi's 501 Jeans",
    description: "Iconic Levi's 501 jeans - timeless style",
    category: "men",
    brand: "levi",
    price: 100,
    salePrice: 80,
    totalStock: 70,
    averageReview: 4.5,
  },
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Levi's Vintage Tee",
    description: "Retro Levi's vintage t-shirt",
    category: "men",
    brand: "levi",
    price: 40,
    salePrice: 30,
    totalStock: 110,
    averageReview: 4.2,
  },

  // Women's Products
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Nike Women's Running Shoes",
    description: "Professional women's running shoes from Nike",
    category: "women",
    brand: "nike",
    price: 140,
    salePrice: 110,
    totalStock: 50,
    averageReview: 4.4,
  },
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Adidas Women's Leggings",
    description: "Comfortable Adidas performance leggings for women",
    category: "women",
    brand: "adidas",
    price: 75,
    salePrice: 55,
    totalStock: 80,
    averageReview: 4.3,
  },

  // Accessories
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Nike Sports Watch",
    description: "Feature-rich Nike sports watch for athletes",
    category: "accessories",
    brand: "nike",
    price: 250,
    salePrice: 200,
    totalStock: 30,
    averageReview: 4.5,
  },
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Adidas Backpack",
    description: "Durable Adidas backpack for sports and travel",
    category: "accessories",
    brand: "adidas",
    price: 80,
    salePrice: 60,
    totalStock: 50,
    averageReview: 4.2,
  },

  // Kids Products
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Nike Kids Sneakers",
    description: "Colorful Nike sneakers designed for kids",
    category: "kids",
    brand: "nike",
    price: 65,
    salePrice: 50,
    totalStock: 70,
    averageReview: 4.3,
  },
  {
    image: "https://picsum.photos/500/500?random=1770996014",
    title: "Adidas Kids T-Shirt",
    description: "Fun and colorful Adidas t-shirt for kids",
    category: "kids",
    brand: "adidas",
    price: 30,
    salePrice: 20,
    totalStock: 100,
    averageReview: 4.2,
  },
];

const featureImages = [
  {
    image: "https://picsum.photos/1200/400?random=1770996014",
  },
  {
    image: "https://picsum.photos/1200/400?random=1770996014",
  },
  {
    image: "https://picsum.photos/1200/400?random=1770996014",
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to database");

    // Clear existing data
    await Product.deleteMany({});
    await Feature.deleteMany({});
    console.log("Cleared existing data");

    // Seed products
    const createdProducts = await Product.insertMany(sampleProducts);
    console.log(`Created ${createdProducts.length} products`);

    // Seed feature images
    const createdFeatures = await Feature.insertMany(featureImages);
    console.log(`Created ${createdFeatures.length} feature images`);

    console.log("Data seeding completed successfully!");
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error.message);
    process.exit(1);
  }
};

seedData();
