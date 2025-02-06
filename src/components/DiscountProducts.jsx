import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

import product1 from "../assets/product1.png";
import ProductItem from "./UI/ProductItem";

export default function ProductsList() {
  const { products } = useLoaderData();

  return (
    <>
      <section className="py-[5rem] px-[10rem] flex flex-col gap-[2rem] bg-[#F6F6F6]">
        <h1 className="text-[1.5rem] font-semibold">Discounts up to -50%</h1>
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
    </>
  );
}
