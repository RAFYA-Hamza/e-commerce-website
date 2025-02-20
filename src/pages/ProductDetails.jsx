import { useLoaderData } from "react-router-dom";
import { sendHttpRequest } from "../hooks/useHttp";
import AsyncLoader from "../components/AsyncLoader";
import Tabs from "../components/UI/Tabs";

import Details from "../components/Details";

const ProductDetails = () => {
  const { product } = useLoaderData();

  return (
    <AsyncLoader promise={product}>
      {(loadedProduct) => {
        console.log(loadedProduct);
        return (
          <section className=" flex flex-col">
            <div className="px-[10rem] py-[7rem] flex items-center gap-[3rem]">
              <div className="">
                <img
                  src={`http://localhost:8080/${loadedProduct.image}`}
                  alt="The images"
                />
              </div>
              <div className="flex flex-col gap-[2rem]">
                <div className="flex flex-col gap-[1rem]">
                  <div className="flex flex-col gap-[1.5rem]">
                    <h1>Apple iPhone 14 Pro Max</h1>
                    <p>$1399</p>
                  </div>

                  <form className="flex flex-col gap-[1.5rem]">
                    <div className="flex">
                      <p>Select color:</p>
                      <input type="radio" />
                    </div>

                    <div className="flex gap-[1rem]">
                      <Tabs />
                      <Tabs />
                      <Tabs />
                    </div>
                    <div className="w-full grid grid-cols-3 grid-flow-row gap-[1rem]">
                      <Details />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </AsyncLoader>
  );
};

export default ProductDetails;

const loadProduct = async ({ request, params }) => {
  const { category } = params;
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  const resData = await sendHttpRequest(
    `http://localhost:8080/products/${category}/${id}`
  );

  return resData;
};

export const loader = ({ request, params }) => {
  return {
    product: loadProduct({ request, params }),
  };
};
