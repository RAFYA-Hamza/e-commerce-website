import { useLoaderData } from "react-router-dom";
import { sendHttpRequest } from "../hooks/useHttp";
import AsyncLoader from "../components/AsyncLoader";
import Tabs from "../components/UI/Tabs";

import Details from "../components/Details";

const ProductDetails = () => {
  const { product } = useLoaderData();

  function handleClick() {
    console.log("clicked");
  }

  return (
    <AsyncLoader promise={product}>
      {(loadedProduct) => {
        console.log(loadedProduct);
        return (
          <section className=" flex flex-col">
            <div className="px-[10rem] py-[7rem] flex items-center gap-[3rem]">
              <div className="flex-1">
                <img
                  src={`http://localhost:8080/${loadedProduct.image}`}
                  alt="The images"
                />
              </div>

              <div className="flex flex-col gap-[2rem] flex-1">
                <div className="flex flex-col gap-[1rem]">
                  <div className="flex flex-col gap-[1.5rem]">
                    <h1 className="text-[2.5rem] leading-none font-bold">
                      Apple iPhone 14 Pro Max
                    </h1>
                    <p className="text-[2rem] font-medium">$1399</p>
                  </div>

                  <form className="flex flex-col gap-[1.5rem]">
                    <div className="flex">
                      <p className="text-[#0C0C0C]">Select color:</p>
                      <div className="relative h-[2rem] w-[2rem]">
                        <input
                          onClick={(e) => handleClick(e.target.value)}
                          className="w-full h-full z-2"
                          type="radio"
                        />
                        <label
                          className="w-full h-full absolute left-[0%] rounded-[100%] bg-transparent"
                          htmlFor=""
                        ></label>
                      </div>
                    </div>

                    <div className="flex gap-[1rem]">
                      <Tabs />
                      <Tabs />
                      <Tabs />
                    </div>
                    <div className="w-full grid grid-cols-3 grid-flow-row gap-[1rem]">
                      <Details />
                      <Details />
                      <Details />
                      <Details />
                      <Details />
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
