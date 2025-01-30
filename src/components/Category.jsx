import rightarrowImg from "../assets/right-arrow.svg";
import leftarrowImg from "../assets/left-arrow.svg";

import phoneImg from "../assets/phone.svg";
import comupterImg from "../assets/computer.svg";
import swatchImg from "../assets/swatch.svg";
import cameraImg from "../assets/camera.svg";
import headphoneImg from "../assets/headphone.svg";
import gamingImg from "../assets/gaming.svg";

import IconButton from "./UI/IconButton";
import CategoryCard from "./UI/CategoryCard";

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
  return (
    <section className="py-[5rem] px-[10rem] bg-[#FAFAFA] flex flex-col gap-[2rem]">
      <div className="flex justify-between items-center">
        <p>Browse By Category</p>
        <div>
          <IconButton url={leftarrowImg} />
          <IconButton url={rightarrowImg} />
        </div>
      </div>

      <div className="flex justify-between">
        {categoryItems.map((item, index) => (
          <CategoryCard
            key={index}
            url={item.url}
            description={item.description}
          >
            {item.label}
          </CategoryCard>
        ))}
      </div>
    </section>
  );
}
