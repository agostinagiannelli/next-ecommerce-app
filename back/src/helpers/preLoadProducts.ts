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
    "name": "iPhone 11",
    "description": "Capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    "shortDescription": "Experience power and elegance",
    "rating": 4.5,
    "price": 699,
    "stock": 10,
    "image": "https://www.stopandclick.es/wp-content/uploads/2022/03/iphone11-purple-select-2019_GEO_EMEA.-StopClick.png",
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
    "name": "Apple Watch Series 6",
    "description": "Track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    "shortDescription": "Stay connected and healthy",
    "rating": 4.9,
    "price": 399,
    "stock": 10,
    "image": "https://phonecityloscristianos.es/wp-content/uploads/2022/11/02-9.png",
    "categoryId": 4,
  },
  {
    "name": "AirPods Pro",
    "description": "Active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
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
