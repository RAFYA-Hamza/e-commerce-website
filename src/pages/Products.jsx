import { useLoaderData, useNavigate } from "react-router-dom";
import { sendHttpRequest } from "../hooks/useHttp";
import AsyncLoader from "../components/AsyncLoader";
import ProductItem from "../components/UI/ProductItem";

import downArrowImg from "../assets/downArrow.svg";
import upArrowImg from "../assets/upArrow.svg";

export default function ProductsPage() {
  const { products } = useLoaderData();
  const navigate = useNavigate();

  return (
    <section className="flex gap-[2rem] px-[10rem] py-[1.5rem]">
      <ul className="flex flex-col gap-[1.5rem] w-full max-w-[16rem]">
        <div className="flex justify-between py-[0.75rem] border-b-1 border-[#B5B5B5]">
          <p>Title</p>
          <img src={downArrowImg} alt="Down Arrow image" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-[#A7A7A7]">
            <p>From</p>
            <p>To</p>
          </div>
          <div className="flex justify-between w-ful">
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
        </div>
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
