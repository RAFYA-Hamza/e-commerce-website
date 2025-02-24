import { useLoaderData } from "react-router-dom";
import { sendHttpRequest } from "../hooks/useHttp";
import AsyncLoader from "../components/AsyncLoader";

import Tabs from "../components/UI/Tabs";
import Button from "../components/UI/Button";

import Details from "../components/Details";
import Feature from "../components/Feature";

import logoPhone from "../assets/icons/sizeScreen.svg";
import logoBattery from "../assets/icons/battery.svg";
import logoCpu from "../assets/icons/cpu.svg";
import logoCore from "../assets/icons/core.svg";
import logoMainCamera from "../assets/icons/mainCamera.svg";
import logoSelfieCamera from "../assets/icons/selfieCamera.svg";

const DETAILS = [
  {
    image: logoPhone,
    description: "Logo Phone",
    label: "Screen size",
    value: '6.7""',
  },
  {
    image: logoCpu,
    description: "Logo Cpu",
    label: "CPU",
    value: '6.7""',
  },
  {
    image: logoCore,
    description: "Logo Core",
    label: "Number of cores",
    value: '6.7""',
  },
  {
    image: logoMainCamera,
    description: "Logo Main camera",
    label: "Main camera",
    value: '6.7""',
  },
  {
    image: logoSelfieCamera,
    description: "Logo Selfie Camera",
    label: "Front camera",
    value: '6.7""',
  },
  {
    image: logoBattery,
    description: "Logo Battery",
    label: "Battery Capacity",
    value: `6.7""`,
  },
];

const ProductDetails = () => {
  const { product } = useLoaderData();

  function handleClick(value) {
    console.log(value);
  }

  return (
    <AsyncLoader promise={product}>
      {(loadedProduct) => {
        console.log(loadedProduct);
        return (
          <section className=" flex flex-col">
            <div className="px-[10rem] py-[7rem] flex items-center gap-[3rem]">
              <div className="flex gap-[1rem] flex-1">
                <div className="max-w-[5rem] flex flex-col gap-[1.5rem] justify-center">
                  <img
                    src={`http://localhost:8080/${loadedProduct.image}`}
                    alt="The images"
                  />
                  <img
                    src={`http://localhost:8080/${loadedProduct.image}`}
                    alt="The images"
                  />
                  <img
                    src={`http://localhost:8080/${loadedProduct.image}`}
                    alt="The images"
                  />
                  <img
                    src={`http://localhost:8080/${loadedProduct.image}`}
                    alt="The images"
                  />
                </div>
                <img
                  className="flex-1"
                  src={`http://localhost:8080/${loadedProduct.image}`}
                  alt="The images"
                />
              </div>

              <div className="flex flex-col gap-[2rem] flex-1">
                <div className="flex flex-col gap-[1rem]">
                  <div className="flex flex-col gap-[1.5rem]">
                    <h1 className="text-[2.5rem] leading-none font-bold">
                      {loadedProduct.name}
                    </h1>
                    <p className="text-[2rem] font-medium">
                      ${loadedProduct.price}
                    </p>
                  </div>

                  <div className="flex flex-col gap-[1.5rem]">
                    <div className="flex gap-[1rem] items-center">
                      <p className="text-[#0C0C0C]">Select color:</p>

                      <div className="flex gap-[1rem]">
                        <button className="h-[2rem] w-[2rem] rounded-[100%] bg-black"></button>
                        <button className="h-[2rem] w-[2rem] rounded-[100%] bg-red-500"></button>
                        <button className="h-[2rem] w-[2rem] rounded-[100%] bg-sky-400"></button>
                      </div>
                    </div>

                    <div className="flex gap-[1rem]">
                      <Tabs />
                      <Tabs />
                      <Tabs />
                    </div>
                    <div className="w-full grid grid-cols-3 grid-flow-row gap-[1rem]">
                      <Details
                        imageUrl={logoPhone}
                        altDescription="Logo phone"
                        label="Screen size"
                        value={loadedProduct.screen_size}
                      />
                      {DETAILS.map((detail) => (
                        <Details
                          key={detail.label}
                          imageUrl={logoPhone}
                          altDescription="Logo phone"
                          label="Screen size"
                          value={loadedProduct.screen_size}
                        />
                      ))}
                    </div>

                    <div className="flex gap-[2rem]">
                      <Button type="blackStroke">Add to Wishlist</Button>
                      <Button>Add to Cart</Button>
                    </div>

                    <div className="flex justify-between">
                      <Feature />
                      <Feature />
                      <Feature />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
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
