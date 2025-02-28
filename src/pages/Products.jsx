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
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { products } = useLoaderData();
  const navigate = useNavigate();
  const { category } = useParams();

  const [step, setStep] = useState(1);

  let steps;
  let min;
  let max;

  function handleChange(value) {
    console.log(value);
    setStep(value);
  }

  function handleFinalValue(products, value) {
    const selectedProducts = products.filter(
      (product) => product.rating === value
    );

    setSelectedProducts(selectedProducts);
  }

  function handleSelectedProducts(products, filterBy, filterValue) {
    const selectedProducts = products.filter(
      (product) => product[filterBy] === filterValue
    );

    setSelectedProducts(selectedProducts);
  }

  function filtersProducts(products) {
    const count = products.reduce((accumulator, currentValue) => {
      const brand = currentValue.Brand;
      const memory = currentValue.memory;

      if (!accumulator["Brand"] || !accumulator["Memory"]) {
        accumulator["Brand"] = {};
        accumulator["Memory"] = BUILT_IN_MEMEROY[category].reduce(
          (acc, obj) => {
            acc[obj] = 0;
            return acc;
          },
          {}
        );
      }

      accumulator["Brand"][brand] = (accumulator["Brand"][brand] || 0) + 1;

      accumulator["Memory"][memory] = (accumulator["Memory"][memory] || 0) + 1;

      return accumulator;
    }, {});

    return count;
  }

  return (
    <section className="flex gap-[2rem] px-[10rem] py-[1.5rem]">
      <AsyncLoader promise={products}>
        {(loadedProducts) => {
          const filteredProducts = filtersProducts(loadedProducts);
          const brands = Object.entries(Object.values(filteredProducts)[0]);
          const memory = Object.entries(Object.values(filteredProducts)[1]);
          const range = loadedProducts
            .map((product) => product.rating)
            .sort((a, b) => a - b);

          steps = range.length;
          min = 0;
          max = steps - 1;

          console.log(min);
          console.log(max);
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
                      {brands?.map((brand) => (
                        <RadioButton
                          onSelect={(e) =>
                            handleSelectedProducts(
                              loadedProducts,
                              "Brand",
                              e.target.value
                            )
                          }
                          key={brand[0]}
                          id={brand[0]}
                          name={category}
                          label={brand[0]}
                          total={brand[1]}
                          disabled={brand[1] <= 0 && true}
                        />
                      ))}
                    </form>
                  </div>
                </Dropdown>

                <Dropdown title="Built-in memory">
                  <div className="w-ful flex flex-col gap-[1rem]">
                    <SearchField isMin={true} />

                    <form className="flex flex-col gap-[0.5rem]" action="">
                      {memory?.map((memo) => {
                        if (memo[0] === "N/A") {
                          return <p key={memo}>Not applicable</p>;
                        }
                        return (
                          <RadioButton
                            onSelect={(e) =>
                              handleSelectedProducts(
                                loadedProducts,
                                "memory",
                                e.target.value
                              )
                            }
                            key={memo[0]}
                            id={memo[0]}
                            name={category}
                            label={memo[0]}
                            total={memo[1]}
                            disabled={memo[1] <= 0 && true}
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
                      {
                        (selectedProducts.length <= 0
                          ? loadedProducts
                          : selectedProducts
                        ).length
                      }
                    </span>
                  </p>

                  <Dropdown isRating={true} title="By rating">
                    <input
                      className="w-[85%] cursor-pointer"
                      min={min}
                      max={max}
                      value={step}
                      type="range"
                      onMouseUp={(e) =>
                        handleFinalValue(
                          loadedProducts,
                          parseFloat(e.target.value)
                        )
                      }
                      onTouchEnd={(e) =>
                        handleFinalValue(
                          loadedProducts,
                          parseFloat(e.target.value)
                        )
                      }
                      onChange={(e) => handleChange(e.target.value)}
                    />

                    <p className="text-black font-semibold">{range[step]}</p>
                  </Dropdown>
                </div>

                <ul className="w-full grid grid-cols-3 grid-flow-row gap-[1rem]">
                  {(selectedProducts.length <= 0
                    ? loadedProducts
                    : selectedProducts
                  ).map((product) => (
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
