import phoneImg from "../assets/phone.svg";
import comupterImg from "../assets/computer.svg";
import swatchImg from "../assets/swatch.svg";
import cameraImg from "../assets/camera.svg";
import headphoneImg from "../assets/headphone.svg";
import gamingImg from "../assets/gaming.svg";

import IconButton from "./UI/IconButton";
import CategoryCard from "./UI/CategoryCard";
import { useNavigate } from "react-router-dom";

const categoryItems = [
  { url: phoneImg, description: "Phones image", label: "Phones" },
  { url: comupterImg, description: "Computers image", label: "Computers" },
  {
    url: swatchImg,
    description: "Smart Watches image",
    label: "Smart Watches",
  },
  { url: cameraImg, description: "Cameras image", label: "Cameras" },
  { url: headphoneImg, description: "Headphones image", label: "Headphones" },
  { url: gamingImg, description: "Gaming image", label: "Gaming" },
];

export default function Category() {
  const navigate = useNavigate();

  return (
    <section className="py-[5rem] px-[10rem] bg-[#FAFAFA] flex flex-col gap-[2rem]">
      <div className="flex justify-between items-center">
        <p className="text-[1.5rem] font-semibold">Browse By Category</p>
        <div>
          <IconButton>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M15 7L10 12L15 17"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </IconButton>

          <IconButton>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M10 7L15 12L10 17"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </IconButton>
        </div>
      </div>

      <div className="flex justify-between">
        {categoryItems.map((item, index) => (
          <CategoryCard
            key={index}
            url={item.url}
            description={item.description}
            onSelect={() => navigate("/products")}
          >
            {item.label}
          </CategoryCard>
        ))}
      </div>
    </section>
  );
}
