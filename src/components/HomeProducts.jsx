import { useLoaderData } from "react-router-dom";

import AsyncLoader from "./AsyncLoader";

import TextButton from "./UI/TextButton";
import ProductItem from "./UI/ProductItem";

import product1 from "../assets/product1.png";

const HomeProducts = () => {
  const { products } = useLoaderData();

  return (
    <section className="py-[3.5rem] px-[10rem] flex flex-col gap-[2rem]">
      <div className="flex gap-[0.5rem]">
        <TextButton isActive={true} label="New Arrival" />
        <TextButton label="Bestseller" />
        <TextButton label="Featured Products" />
      </div>
      <ul className="grid grid-cols-4 grid-flow-row gap-[1rem]">
        {
          <AsyncLoader promise={products}>
            {(loadedProducts) =>
              loadedProducts?.map((product) => (
                <ProductItem
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  urlImage={product1}
                />
              ))
            }
          </AsyncLoader>
        }
      </ul>
    </section>
  );
};

export default HomeProducts;
