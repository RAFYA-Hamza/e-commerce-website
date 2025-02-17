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

  const arry = [
    {
      id: 11,
      name: "Samsung Galaxy S23 Ultra",
      price: 1199,
      image: "images/iphone-14-pro.png",
      category: "Smartphones",
      status: "old",
      Brand: "Samsung",
      memory: "1TB",
      rating: 4.8,
    },
    {
      id: 12,
      name: "Dell XPS 15",
      price: 1999,
      image: "images/iphone-14-pro.png",
      category: "Computers",
      status: "old",
      Brand: "Samsung",
      memory: "1TB",
      rating: 4.7,
    },
    {
      id: 13,
      name: "Fitbit Sense 2",
      price: 299,
      image: "images/iphone-14-pro.png",
      category: "Smartwatches",
      status: "discount",
      Brand: "Fitbit",
      memory: "4GB",
      rating: 4.4,
    },
    {
      id: 14,
      name: "Sony Alpha 7 IV",
      price: 2499,
      image: "images/iphone-14-pro.png",
      category: "Cameras",
      status: "featured",
      Brand: "Sony",
      memory: "512GB",
      rating: 4.8,
    },
  ];

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
          // const memory = Object.values(filteredProducts)[1];
          console.log(brands);
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
                          key={brand[0]}
                          id={brand[0]}
                          name={category}
                          label={brand[0]}
                          total={brand[1]}
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
