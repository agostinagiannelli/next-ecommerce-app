import { Card } from "@/components/card";
import { products } from "../../helpers/products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.svg"
          alt="Codecraft Logo"
          width={300}
          height={100}
          priority
        />
      </div>
      <h1 className="text-4xl font-bold text-center text-gray-700 dark:text-gray-300">
        Welcome to Codecraft
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <Card
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
}
