import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

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
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={products}
              errorElement={<p>Can't fetch new products</p>}
            >
              {(products) =>
                products?.map((product) => (
                  <ProductItem
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    urlImage={product1}
                  />
                ))
              }
            </Await>
          </Suspense>
        }
      </ul>
    </section>
  );
};

export default HomeProducts;
