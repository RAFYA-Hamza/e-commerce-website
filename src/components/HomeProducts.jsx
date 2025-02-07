import { useLoaderData } from "react-router-dom";

import AsyncLoader from "./AsyncLoader";

import TextButton from "./UI/TextButton";
import ProductItem from "./UI/ProductItem";
import { useState } from "react";

const HomeProducts = () => {
  const { products } = useLoaderData();

  const [productCategory, setProductCategory] = useState("new");

  function handleProductCategory(type) {
    setProductCategory(type);
  }

  return (
    <section className="py-[3.5rem] px-[10rem] flex flex-col gap-[2rem]">
      <div className="flex gap-[0.5rem]">
        <TextButton
          onSelect={() => handleProductCategory("new")}
          isActive={productCategory === "new" ? true : false}
          label="New Arrival"
        />
        <TextButton
          onSelect={() => handleProductCategory("bestseller")}
          isActive={productCategory === "bestseller" ? true : false}
          label="Bestseller"
        />
        <TextButton
          onSelect={() => handleProductCategory("featured")}
          isActive={productCategory === "featured" ? true : false}
          label="Featured Products"
        />
      </div>
      <ul className="grid grid-cols-4 grid-flow-row gap-[1rem]">
        {
          <AsyncLoader promise={products}>
            {(loadedProducts) => {
              const filteredProducts = loadedProducts.filter(
                (product) => product.status === productCategory
              );

              return filteredProducts?.map((product) => (
                <ProductItem
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  urlImage={`http://localhost:8080/${product.image}`}
                />
              ));
            }}
          </AsyncLoader>
        }
      </ul>
    </section>
  );
};

export default HomeProducts;
