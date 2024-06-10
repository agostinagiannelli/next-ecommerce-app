import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  description: string;
  shortDescription: string;
  rating: number;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

const productsToPreLoad: IProduct[] = [
  {
    "name": "iPhone 15 Pro",
    "description": "Capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand with the iPhone 15 Pro.",
    "shortDescription": "Experience power and elegance",
    "rating": 4.5,
    "price": 699,
    "stock": 10,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403926/henry-m4/iPhone15.png",
    "categoryId": 1,
  },
  {
    "name": "MacBook Air",
    "description": "Lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    "shortDescription": "Embrace efficiency and sophistication",
    "rating": 4.8,
    "price": 999,
    "stock": 10,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403926/henry-m4/MacBookAir.png",
    "categoryId": 2,
  },
  {
    "name": "iPad Pro",
    "description": "Powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    "shortDescription": "Unleash your creativity and productivity",
    "rating": 4.7,
    "price": 799,
    "stock": 10,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403925/henry-m4/iPadPro.png",
    "categoryId": 3,
  },
  {
    "name": "Apple Watch Series 9",
    "description": "Track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 9.",
    "shortDescription": "Stay connected and healthy",
    "rating": 4.9,
    "price": 399,
    "stock": 10,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403925/henry-m4/AppleWatchSeries9.png",
    "categoryId": 4,
  },
  {
    "name": "AirPods Pro 2nd Generation",
    "description": "Active noise cancellation, transparency mode, and customizable fit make the AirPods Pro 2nd Generation the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    "shortDescription": "Immerse yourself in sound",
    "rating": 4.6,
    "price": 249,
    "stock": 10,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403926/henry-m4/AirPodsPro2ndGeneration.png",
    "categoryId": 5,
  },
  {
    "name": "HomePod Mini",
    "description": "Immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    "shortDescription": "Elevate your home audio experience",
    "rating": 4.4,
    "price": 99,
    "stock": 10,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403927/henry-m4/HomePodMini.png",
    "categoryId": 6,
  },
  {
    "name": "iPhone 12",
    "description": "Experience next-level performance with the iPhone 12. Its A14 Bionic chip ensures smooth operation, while the dual-camera system captures stunning photos and videos.",
    "shortDescription": "Next-level performance and design",
    "rating": 4.6,
    "price": 799,
    "stock": 15,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403926/henry-m4/iPhone12.png",
    "categoryId": 1,
  },
  {
    "name": "MacBook Pro",
    "description": "Unleash your creativity with the MacBook Pro. Featuring the M1 chip, stunning Retina display, and advanced thermal management for sustained performance.",
    "shortDescription": "Professional power in a sleek design",
    "rating": 4.9,
    "price": 1299,
    "stock": 8,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403926/henry-m4/MacBookPro.png",
    "categoryId": 2,
  },
  {
    "name": "iPad Air",
    "description": "The iPad Air combines powerful performance with sleek design. Its A14 Bionic chip handles demanding tasks with ease, while the Liquid Retina display brings everything to life.",
    "shortDescription": "Powerful, colorful, wonderful",
    "rating": 4.7,
    "price": 599,
    "stock": 12,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403924/henry-m4/iPadAir.png",
    "categoryId": 3,
  },
  {
    "name": "Apple Watch SE",
    "description": "Stay active, healthy, and connected with the Apple Watch SE. It offers essential features to help you stay on top of your health and fitness goals.",
    "shortDescription": "Essential features for a healthy life",
    "rating": 4.5,
    "price": 279,
    "stock": 20,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403927/henry-m4/AppleWatchSE.png",
    "categoryId": 4,
  },
  {
    "name": "AirPods Max",
    "description": "Experience high-fidelity audio with the AirPods Max. Active Noise Cancellation, spatial audio, and a comfortable design make these headphones a top choice.",
    "shortDescription": "High-fidelity audio, effortless control",
    "rating": 4.7,
    "price": 549,
    "stock": 5,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403924/henry-m4/AirPodsMax.png",
    "categoryId": 5,
  },
  {
    "name": "Apple TV 4K",
    "description": "Apple TV 4K brings the best of TV together with your favorite Apple devices and services. Experience stunning 4K HDR picture quality and immersive sound.",
    "shortDescription": "The best TV experience",
    "rating": 4.8,
    "price": 179,
    "stock": 10,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403924/henry-m4/AppleTV4K.png",
    "categoryId": 6,
  },
  {
    "name": "iPhone SE",
    "description": "The iPhone SE packs powerful performance into a compact design. Enjoy the A13 Bionic chip and advanced camera features in a pocket-friendly size.",
    "shortDescription": "Powerful features in a compact size",
    "rating": 4.4,
    "price": 399,
    "stock": 18,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403926/henry-m4/iPhoneSE.png",
    "categoryId": 1,
  },
  {
    "name": "Mac Mini",
    "description": "The Mac Mini offers incredible performance with the M1 chip. Compact yet powerful, it’s perfect for a variety of uses, from creative projects to home entertainment.",
    "shortDescription": "Compact power, versatile use",
    "rating": 4.6,
    "price": 699,
    "stock": 7,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403927/henry-m4/MacMini.png",
    "categoryId": 2,
  },
  {
    "name": "iPad Mini",
    "description": "Small but powerful, the iPad Mini features the A15 Bionic chip and a beautiful 8.3-inch Liquid Retina display. It’s perfect for gaming, reading, and more.",
    "shortDescription": "Mini just got mightier",
    "rating": 4.7,
    "price": 499,
    "stock": 14,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403925/henry-m4/iPadMini.png",
    "categoryId": 3,
  },
  {
    "name": "Apple Watch Series 7",
    "description": "The Apple Watch Series 7 features the largest, most advanced display yet, offering new ways to stay active, healthy, and connected.",
    "shortDescription": "Full screen ahead",
    "rating": 4.9,
    "price": 429,
    "stock": 11,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403925/henry-m4/AppleWatchSeries7.png",
    "categoryId": 4,
  },
  {
    "name": "AirPods 3rd Generation",
    "description": "The AirPods 3rd Generation offer a new design, spatial audio, and longer battery life. Enjoy immersive sound and effortless setup with all your Apple devices.",
    "shortDescription": "All-new design and spatial audio",
    "rating": 4.5,
    "price": 179,
    "stock": 13,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403924/henry-m4/AirPods3rdGeneration.png",
    "categoryId": 5,
  },
  {
    "name": "HomePod",
    "description": "The HomePod delivers high-fidelity audio and integrates seamlessly with your Apple ecosystem. Control your smart home, enjoy music, and more with voice commands.",
    "shortDescription": "High-fidelity audio and smart home control",
    "rating": 4.7,
    "price": 299,
    "stock": 6,
    "image": "https://res.cloudinary.com/dlea3w6x8/image/upload/v1717403925/henry-m4/HomePod.png",
    "categoryId": 6,
  }
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
