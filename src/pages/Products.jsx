import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { sendHttpRequest } from "../hooks/useHttp";

import AsyncLoader from "../components/AsyncLoader";
import ProductItem from "../components/UI/ProductItem";
import Dropdown from "../components/UI/Dropdown";

import SearchField from "../components/UI/SearchField";
import RadioButton from "../components/RadioButton";
import { useState } from "react";

const BUILT_IN_MEMEROY = {
  Smartphones: ["64GB", "128GB", "256GB", "512GB", "1TB"],
  Computers: ["256GB", "512GB", "1TB", "2TB"],
  Smartwatches: ["4GB", "8GB", "16GB", "32GB"],
  Cameras: ["N/A"],
  Headphones: ["N/A"],
  Gaming: ["64GB", "128GB", "256GB", "512GB", "1TB", "2TB"],
};

export default function ProductsPage() {
  const { products } = useLoaderData();
  const navigate = useNavigate();

  const [finalValue, setFinalValue] = useState(false);

  const { category } = useParams();
  const memory = Object.values(BUILT_IN_MEMEROY[category]);

  // function formatNumber(products) {
  //   let newProducts = [...products];

  //   for (let i = 0; i < newProducts.length - 1; i++) {
  //     for (let j = i + 1; j < newProducts.length; j++) {
  //       if (
  //         newProducts[i].memory !== "N/A" &&
  //         newProducts[j].memory !== "N/A"
  //       ) {
  //         const memory1 = newProducts[i].memory.slice(0, -2);
  //         const memory2 = newProducts[j].memory.slice(0, -2);

  //         if (parseInt(memory1) > parseInt(memory2)) {
  //           [newProducts[i], newProducts[j]] = [newProducts[j], newProducts[i]];
  //         }
  //       }
  //     }
  //   }

  //   return newProducts;
  // }

  function handleChange(value) {
    setFinalValue(value);
  }

  console.log("final value", finalValue);

  return (
    <section className="flex gap-[2rem] px-[10rem] py-[1.5rem]">
      <AsyncLoader promise={products}>
        {(loadedProducts) => {
          console.log(loadedProducts);

          return (
            <>
              <ul className="flex flex-col gap-[1.5rem] w-full max-w-[16rem]">
                <Dropdown title="Price">
                  <div className="flex justify-between text-[#A7A7A7]">
                    <p>From</p>
                    <p>To</p>
                  </div>
                  <div className="w-ful flex justify-between">
                    <input
                      className="max-w-[6.75rem] py-[0.5rem] px-[0.5rem] border-[1px] border-[#9F9F9F] rounded-sm"
                      type="number"
                      name=""
                      id=""
                    />
                    <input
                      className="max-w-[6.75rem] py-[0.5rem] px-[0.5rem] border-[1px] border-[#9F9F9F] rounded-sm"
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                </Dropdown>

                <Dropdown title="Brand">
                  <div className="w-ful flex flex-col gap-[1rem]">
                    <SearchField isMin={true} />

                    <form className="flex flex-col gap-[0.5rem]" action="">
                      {loadedProducts?.map((product) => (
                        <RadioButton
                          key={product.id}
                          id={product.Brand.toLowerCase()}
                          name={product.category}
                          label={product.Brand}
                        />
                      ))}
                    </form>
                  </div>
                </Dropdown>

                <Dropdown title="Built-in memory">
                  <div className="w-ful flex flex-col gap-[1rem]">
                    <SearchField isMin={true} />

                    <form className="flex flex-col gap-[0.5rem]" action="">
                      {memory?.map((element) => {
                        if (element === "N/A") {
                          return <p key={element}>Not applicable</p>;
                        }
                        return (
                          <RadioButton
                            key={element}
                            id={element}
                            name={element}
                            label={element}
                          />
                        );
                      })}
                    </form>
                  </div>
                </Dropdown>
              </ul>
              <div className="flex flex-col gap-[1.5rem]">
                <div className="flex justify-between items-center">
                  <p className="text-[#6C6C6C]">
                    Selected Products:{" "}
                    <span className="text-[1.25rem] text-black font-semibold">
                      85
                    </span>
                  </p>

                  <Dropdown isRating={true} title="By rating">
                    <input
                      className="w-full cursor-pointer"
                      min="0"
                      max="5"
                      step="0.1"
                      type="range"
                      onTouchEnd={(e) => handleChange(e.target.value)}
                    />
                  </Dropdown>
                </div>

                <ul className="w-full grid grid-cols-3 grid-flow-row gap-[1rem]">
                  {loadedProducts?.map((product) => (
                    <ProductItem
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      urlImage={`http://localhost:8080/${product.image}`}
                      onSelect={() =>
                        navigate(
                          `details?id=${product.id}&Category=${product.category}&Brand=${product.Brand}&name=${product.name}`
                        )
                      }
                    />
                  ))}
                </ul>
              </div>
            </>
          );
        }}
      </AsyncLoader>
    </section>
  );
}

const loadProducts = async ({ params }) => {
  const { category } = params;
  const resData = await sendHttpRequest(
    "http://localhost:8080/products/" + category
  );

  return resData;
};

export const loader = ({ params }) => {
  return {
    products: loadProducts({ params }),
  };
};
