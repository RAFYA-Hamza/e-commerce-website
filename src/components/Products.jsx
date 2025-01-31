import Button from "./UI/Button";
import TextButton from "./UI/TextButton";

import product1 from "../assets/product1.png";
import IconButton from "./UI/IconButton";

import FavoriteIcone from "./UI/FavoriteIcon";

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
    <section className="py-[3.5rem] px-[10rem] flex flex-col gap-[2rem]">
      <div className="flex gap-[0.5rem]">
        <TextButton isActive={true} label="New Arrival" />
        <TextButton label="Bestseller" />
        <TextButton label="Featured Products" />
      </div>
      <ul className="grid grid-cols-4 grid-flow-row gap-[1rem]">
        {dummyProducts.map((product) => (
          <li
            key={product.id}
            className="flex flex-col items-center gap-[1rem] overflow-hidden py-[1.5rem] px-[1rem] rounded-[0.5rem] bg-[#F6F6F6]"
          >
            <div className="self-end">
              <IconButton>
                <FavoriteIcone />
              </IconButton>
            </div>

            <img
              className="w-full max-w-full aspect-square object-cover"
              src={product1}
              alt="Iphone 14 pro max"
            />

            <div className="flex flex-col items-center gap-[1.5rem]">
              <div className="flex flex-col items-center gap-[1rem]">
                <p className="min-h-[3rem] text-center">{product.name}</p>
                <p className="text-[1.5rem] font-semibold leading-none">
                  {`$${product.price}`}
                </p>
              </div>
              <Button type="Fill">Shop Now</Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* <ul className="grid grid-cols-4 grid-flow-row gap-[1rem]">
        {dummyProducts.map((product) => (
          <li
            key={product.id}
            className="flex flex-col items-center justify-between gap-[1rem] overflow-hidden py-[1.5rem] px-[1rem] rounded-[0.5rem] bg-[#F6F6F6]"
          >
            <div className="self-end">
              <IconButton>
                <FavoriteIcone />
              </IconButton>
            </div>

            <img
              className="h-[10rem] w-full object-contain"
              src={product1}
              alt="Iphone 14 pro max"
            />

            <div className="flex flex-col items-center gap-[1.5rem]">
              <div className="flex flex-col items-center gap-[1rem]">
                <p className="text-center">{product.name}</p>
                <p className="text-[1.5rem] font-semibold leading-none">
                  {`$${product.price}`}
                </p>
              </div>
              <Button type="Fill">Shop Now</Button>
            </div>
          </li>
        ))}
      </ul> */
