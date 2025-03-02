import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

import { sendHttpRequest } from "../hooks/useHttp";

import Tabs from "../components/UI/Tabs";
import Button from "../components/UI/Button";
import Details from "../components/Details";
import Feature from "../components/Feature";
import AsyncLoader from "../components/AsyncLoader";

import logoPhone from "../assets/icons/sizeScreen.svg";
import logoBattery from "../assets/icons/battery.svg";
import logoCpu from "../assets/icons/cpu.svg";
import logoCore from "../assets/icons/core.svg";
import logoMainCamera from "../assets/icons/mainCamera.svg";
import logoSelfieCamera from "../assets/icons/selfieCamera.svg";
import logoWarranty from "../assets/icons/warranty.svg";
import logoStore from "../assets/icons/store.svg";
import logoDelivery from "../assets/icons/delivery.svg";

const DETAILS = [
  {
    image: logoPhone,
    description: "Logo Phone",
    label: "Screen size",
    value: "screen_size",
  },
  {
    image: logoCpu,
    description: "Logo Cpu",
    label: "CPU",
    value: "CPU",
  },
  {
    image: logoCore,
    description: "Logo Core",
    label: "Number of cores",
    value: "Numbers_of_cores",
  },
  {
    image: logoMainCamera,
    description: "Logo Main camera",
    label: "Main camera",
    value: "main_camera",
  },
  {
    image: logoSelfieCamera,
    description: "Logo Selfie Camera",
    label: "Front camera",
    value: "front_camera",
  },
  {
    image: logoBattery,
    description: "Logo Battery",
    label: "Battery Capacity",
    value: "battery_capacity",
  },
];

const FEATURES = [
  {
    image: logoDelivery,
    label: "Free delivery",
    value: "1-2 day",
  },
  {
    image: logoStore,
    label: "In stock",
    value: "Today",
  },
  {
    image: logoWarranty,
    label: "Guaranteed",
    value: "1 year",
  },
];

const ProductDetails = () => {
  const { product } = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                      {DETAILS.map((detail, index) => {
                        if (loadedProduct[`${detail.value}`] === "N/A") {
                          return;
                        }

                        return (
                          <Details
                            key={index}
                            imageUrl={detail.image}
                            altDescription={detail.description}
                            label={detail.label}
                            value={loadedProduct[`${detail.value}`]}
                          />
                        );
                      })}
                    </div>

                    <div className="flex gap-[2rem]">
                      <Button type="blackStroke">Add to Wishlist</Button>
                      <Button>Add to Cart</Button>
                    </div>

                    <div className="flex justify-between">
                      {FEATURES.map((feature, index) => (
                        <Feature
                          key={index}
                          imageUrl={feature.image}
                          label={feature.label}
                          value={feature.value}
                        />
                      ))}
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
