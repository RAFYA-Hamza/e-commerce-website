import { useLoaderData, useNavigate } from "react-router-dom";
import { sendHttpRequest } from "../hooks/useHttp";

import AsyncLoader from "../components/AsyncLoader";
import ProductItem from "../components/UI/ProductItem";
import Dropdown from "../components/UI/Dropdown";

import SearchField from "../components/UI/SearchField";
import RadioButton from "../components/RadioButton";

export default function ProductsPage() {
  const { products } = useLoaderData();
  const navigate = useNavigate();

  function sortItems(products) {
    const newProducts = [];
  }

  function formatNumber(products) {
    let newProducts = [...products];
    let buffer = [];

    // products.forEach((product, index) => {
    //   for (let i = index + 1; i < products.length; i++) {
    //     if (product.memory !== "N/A") {
    //       const memory1 = product.memory.slice(0, -2);
    //       const memory2 = products[i].memory.slice(0, -2);

    //       if (memory1 < memory2) {
    //         newProducts = product;
    //       } else if (memory2 < memory1) {
    //         newProducts = products[i];
    //         product;
    //       }
    //     }
    //   }
    // });

    console.log(newProducts);

    for (let i = 0; i < newProducts.length - 1; i++) {
      for (let j = i + 1; j < newProducts.length; j++) {
        if (
          newProducts[i].memory !== "N/A" &&
          newProducts[j].memory !== "N/A"
        ) {
          const memory1 = newProducts[i].memory.slice(0, -2);
          const memory2 = newProducts[j].memory.slice(0, -2);

          if (parseInt(memory1) > parseInt(memory2)) {
            [newProducts[i], newProducts[j]] = [newProducts[j], newProducts[i]];
          }
          console.log(newProducts);
        }
      }
    }

    return newProducts;
  }

  return (
    <section className="flex gap-[2rem] px-[10rem] py-[1.5rem]">
      <AsyncLoader promise={products}>
        {(loadedProducts) => {
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
                        <RadioButton key={product.id} label={product.Brand} />
                      ))}
                    </form>
                  </div>
                </Dropdown>

                <Dropdown title="Built-in memory">
                  <form className="flex flex-col gap-[0.5rem]" action="">
                    {formatNumber(loadedProducts)?.map((product) => (
                      <RadioButton key={product.id} label={product.memory} />
                    ))}
                  </form>
                </Dropdown>
              </ul>
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
