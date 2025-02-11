import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { sendHttpRequest } from "../hooks/useHttp";

import AsyncLoader from "../components/AsyncLoader";
import ProductItem from "../components/UI/ProductItem";
import Dropdown from "../components/UI/Dropdown";

import downArrowImg from "../assets/downArrow.svg";
import upArrowImg from "../assets/upArrow.svg";
import SearchField from "../components/UI/SearchField";

export default function ProductsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const { products } = useLoaderData();
  const navigate = useNavigate();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="flex gap-[2rem] px-[10rem] py-[1.5rem]">
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
          <div className="w-ful flex flex-col">
            <form action="">
              <SearchField isMin={true} />

              <div>
                <input
                  type="radio"
                  name="smartphones"
                  id="apple"
                  value="Apple"
                />
                <label htmlFor="apple">Apple</label>
              </div>
              <div>
                <input type="radio" name="smartphones" id="samsung" />
                <label htmlFor="samsung">Samsung</label>
              </div>
              <div>
                <input type="radio" name="smartphones" id="oppo" />
                <label htmlFor="oppo">OPPO</label>
              </div>
            </form>
          </div>
        </Dropdown>

        <Dropdown title="Built-in memory">
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
      </ul>

      <ul className="w-full grid grid-cols-3 grid-flow-row gap-[1rem]">
        <AsyncLoader promise={products}>
          {(loadedProducts) => {
            console.log(loadedProducts);
            if (loadedProducts.length <= 0) {
              return <p>There is no product for this category</p>;
            }

            return loadedProducts?.map((product) => (
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
            ));
          }}
        </AsyncLoader>
      </ul>
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
