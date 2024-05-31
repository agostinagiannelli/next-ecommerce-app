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
    "image": "https://www.mobi-hub.co.uk/wp-content/uploads/1-front-back-black-titanium.png",
    "categoryId": 1,
  },
  {
    "name": "MacBook Air",
    "description": "Lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    "shortDescription": "Embrace efficiency and sophistication",
    "rating": 4.8,
    "price": 999,
    "stock": 10,
    "image": "https://images.macrumors.com/t/Au-OUIb73hHvx2w8CirAir5bNbM=/1600x/article-new/2013/09/macbook-air-m2-roundup-header.png",
    "categoryId": 2,
  },
  {
    "name": "iPad Pro",
    "description": "Powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    "shortDescription": "Unleash your creativity and productivity",
    "rating": 4.7,
    "price": 799,
    "stock": 10,
    "image": "https://techhub.osu.edu/sites/default/files/products/ipad_pro_12_9-in_wi-fi_space_gray_2-up_screen_usen-3.png",
    "categoryId": 3,
  },
  {
    "name": "Apple Watch Series 9",
    "description": "Track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 9.",
    "shortDescription": "Stay connected and healthy",
    "rating": 4.9,
    "price": 399,
    "stock": 10,
    "image": "https://www.janado.de/cdn/shop/files/apple-watch-series-9-gps-45mm-aluminium-mitternacht-sportarmband-mitternacht-m-l-pn.png?v=1714180672",
    "categoryId": 4,
  },
  {
    "name": "AirPods Pro 2nd Generation",
    "description": "Active noise cancellation, transparency mode, and customizable fit make the AirPods Pro 2nd Generation the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    "shortDescription": "Immerse yourself in sound",
    "rating": 4.6,
    "price": 249,
    "stock": 10,
    "image": "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png",
    "categoryId": 5,
  },
  {
    "name": "HomePod Mini",
    "description": "Immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    "shortDescription": "Elevate your home audio experience",
    "rating": 4.4,
    "price": 99,
    "stock": 10,
    "image": "https://www.dimprice.co.uk/image/cache/png/apple-homepod-mini/Black/apple-homepod-mini-01-1200x1200.png",
    "categoryId": 6,
  },
  {
    "name": "iPhone 12",
    "description": "Experience next-level performance with the iPhone 12. Its A14 Bionic chip ensures smooth operation, while the dual-camera system captures stunning photos and videos.",
    "shortDescription": "Next-level performance and design",
    "rating": 4.6,
    "price": 799,
    "stock": 15,
    "image": "https://grademobile.co.uk/cdn/shop/files/12-green.png",
    "categoryId": 1,
  },
  {
    "name": "MacBook Pro",
    "description": "Unleash your creativity with the MacBook Pro. Featuring the M1 chip, stunning Retina display, and advanced thermal management for sustained performance.",
    "shortDescription": "Professional power in a sleek design",
    "rating": 4.9,
    "price": 1299,
    "stock": 8,
    "image": "https://photos5.appleinsider.com/price_guide/macbook-pro-16-inch-2023-pp-header.png",
    "categoryId": 2,
  },
  {
    "name": "iPad Air",
    "description": "The iPad Air combines powerful performance with sleek design. Its A14 Bionic chip handles demanding tasks with ease, while the Liquid Retina display brings everything to life.",
    "shortDescription": "Powerful, colorful, wonderful",
    "rating": 4.7,
    "price": 599,
    "stock": 12,
    "image": "https://istorepy.com/cdn/shop/products/ipad-mini-select-wifi-pink-202109.png",
    "categoryId": 3,
  },
  {
    "name": "Apple Watch SE",
    "description": "Stay active, healthy, and connected with the Apple Watch SE. It offers essential features to help you stay on top of your health and fitness goals.",
    "shortDescription": "Essential features for a healthy life",
    "rating": 4.5,
    "price": 279,
    "stock": 20,
    "image": "https://res-5.cloudinary.com/grover/image/upload/v1667321421/q1k0u9mtv1uylktnwxpo.png",
    "categoryId": 4,
  },
  {
    "name": "AirPods Max",
    "description": "Experience high-fidelity audio with the AirPods Max. Active Noise Cancellation, spatial audio, and a comfortable design make these headphones a top choice.",
    "shortDescription": "High-fidelity audio, effortless control",
    "rating": 4.7,
    "price": 549,
    "stock": 5,
    "image": "https://lmt-web.mstatic.lv/eshop/21107/AirPods_Max_Space_Gray_PDP_Image_Position-1__US-EN.png",
    "categoryId": 5,
  },
  {
    "name": "Apple TV 4K",
    "description": "Apple TV 4K brings the best of TV together with your favorite Apple devices and services. Experience stunning 4K HDR picture quality and immersive sound.",
    "shortDescription": "The best TV experience",
    "rating": 4.8,
    "price": 179,
    "stock": 10,
    "image": "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111922_sp845-apple-tv-4k-2gen.png",
    "categoryId": 6,
  },
  {
    "name": "iPhone SE",
    "description": "The iPhone SE packs powerful performance into a compact design. Enjoy the A13 Bionic chip and advanced camera features in a pocket-friendly size.",
    "shortDescription": "Powerful features in a compact size",
    "rating": 4.4,
    "price": 399,
    "stock": 18,
    "image": "https://reboxed.co/cdn/shop/files/5fc09ea83557a64125b07a176dace671_a3677a3d-e5b5-4f8b-9eb8-e5b82a90c1f9_1200x.png",
    "categoryId": 1,
  },
  {
    "name": "Mac Mini",
    "description": "The Mac Mini offers incredible performance with the M1 chip. Compact yet powerful, it’s perfect for a variety of uses, from creative projects to home entertainment.",
    "shortDescription": "Compact power, versatile use",
    "rating": 4.6,
    "price": 699,
    "stock": 7,
    "image": "https://photos5.appleinsider.com/price_guide/2018-mac-mini.png",
    "categoryId": 2,
  },
  {
    "name": "iPad Mini",
    "description": "Small but powerful, the iPad Mini features the A15 Bionic chip and a beautiful 8.3-inch Liquid Retina display. It’s perfect for gaming, reading, and more.",
    "shortDescription": "Mini just got mightier",
    "rating": 4.7,
    "price": 499,
    "stock": 14,
    "image": "https://www.stopandclick.es/wp-content/uploads/2022/03/iPad-Air-Purpura-M1.png",
    "categoryId": 3,
  },
  {
    "name": "Apple Watch Series 7",
    "description": "The Apple Watch Series 7 features the largest, most advanced display yet, offering new ways to stay active, healthy, and connected.",
    "shortDescription": "Full screen ahead",
    "rating": 4.9,
    "price": 429,
    "stock": 11,
    "image": "https://res-3.cloudinary.com/grover/image/upload/v1633703158/py9fvmfn1jwbo1yokp1k.png",
    "categoryId": 4,
  },
  {
    "name": "AirPods 3rd Generation",
    "description": "The AirPods 3rd Generation offer a new design, spatial audio, and longer battery life. Enjoy immersive sound and effortless setup with all your Apple devices.",
    "shortDescription": "All-new design and spatial audio",
    "rating": 4.5,
    "price": 179,
    "stock": 13,
    "image": "https://cdn.revendo.com/media/ed/9f/0b/1661410089/apple-airpods-weiss-guenstig-gebraucht-kaufen-6.png.png",
    "categoryId": 5,
  },
  {
    "name": "HomePod",
    "description": "The HomePod delivers high-fidelity audio and integrates seamlessly with your Apple ecosystem. Control your smart home, enjoy music, and more with voice commands.",
    "shortDescription": "High-fidelity audio and smart home control",
    "rating": 4.7,
    "price": 299,
    "stock": 6,
    "image": "https://www.iworldconnect.com/cdn/shop/files/HomePod_2nd-Gen_White_Hero_Alt_Screen__USEN_2081617d-c0b4-4b96-9bb5-262a4f570263_1024x1024.png",
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
