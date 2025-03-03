import { useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";

import { sendHttpRequest } from "../hooks/useHttp";

import Tabs from "../components/UI/Tabs";
import Button from "../components/UI/Button";
import Details from "../components/Details";
import Feature from "../components/Feature";
import AsyncLoader from "../components/AsyncLoader";
import BUILT_IN_MEMEROY from "../utils/builtInMemory";

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

const colorMap = {
  "Space Black": "#0A0A0A",
  Silver: "#C0C0C0",
  Gold: "#FFD700",
  "Space Gray": "#808080",
  Black: "#000000",
  "Pink Gold": "#E0BFB8",
  White: "#FFFFFF",
  Obsidian: "#464646",
  Snow: "#FFFAFA",
  Hazel: "#8E7618",
  Platinum: "#E5E4E2",
  Sage: "#B2AC88",
  Sandstone: "#C2B280",
  Titanium: "#878681",
  "Phantom Black": "#000000",
  Green: "#00FF00",
  Lavender: "#E6E6FA",
  "Platinum Silver": "#C0C0C0",
  "Frost White": "#F5F5F5",
  Graphite: "#383838",
  "Titan Black": "#000000",
  "Emerald Green": "#50C878",
  "Nightfall Black": "#000000",
  "Poseidon Blue": "#1E3A8A",
};

const ProductDetails = () => {
  const { product } = useLoaderData();
  const { category } = useParams();

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
                        {loadedProduct.colors.map((color, index) => {
                          return (
                            <button
                              key={index}
                              style={{ backgroundColor: colorMap[color] }}
                              className="h-[2rem] w-[2rem] border-2 border-blue-500 rounded-full cursor-pointer"
                            ></button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex gap-[1rem]">
                      {BUILT_IN_MEMEROY[category].map((memory, index) => (
                        <Tabs
                          status={
                            loadedProduct.memory === memory
                              ? "selected"
                              : "noActive"
                          }
                          key={index}
                          label={memory}
                        />
                      ))}
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
