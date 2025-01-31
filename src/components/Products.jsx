import TextButton from "./UI/TextButton";
import product1 from "../assets/product1.png";
import ProductItem from "./UI/ProductItem";

const dummyProducts = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    price: 1399,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Blackmagic Pocket Cinema Camera 6k",
    price: 2535,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: 399,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "AirPods Max Silver",
    price: 549,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: 369,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: 1799,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 7,
    name: "Galaxy Buds FE Graphite",
    price: 99.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 8,
    name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK21.3) 2021',
    price: 398,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 9,
    name: "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
    price: 399,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 10,
    name: "Canon EOS R5 Mirrorless Camera",
    price: 3899,
    image: "https://via.placeholder.com/300",
  },
];

export default function Products() {
  return (
    <>
      <section className="py-[3.5rem] px-[10rem] flex flex-col gap-[2rem]">
        <div className="flex gap-[0.5rem]">
          <TextButton isActive={true} label="New Arrival" />
          <TextButton label="Bestseller" />
          <TextButton label="Featured Products" />
        </div>
        <ul className="grid grid-cols-4 grid-flow-row gap-[1rem]">
          {dummyProducts.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              price={product.price}
              urlImage={product1}
            />
          ))}
        </ul>
      </section>
      <section className="py-[5rem] px-[10rem] flex flex-col gap-[2rem] bg-[#F6F6F6]">
        <h1 className="text-[1.5rem] font-semibold">Discounts up to -50%</h1>
        <ul className="grid grid-cols-4 grid-flow-row gap-[1rem]">
          {dummyProducts.slice(1, 3).map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              price={product.price}
              urlImage={product1}
              isWhite={true}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
