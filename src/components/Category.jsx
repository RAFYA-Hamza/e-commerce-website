import IconButton from "./UI/IconButton";
import CategoryCard from "./UI/CategoryCard";

import categoryItems from "../utils/categoryItems";

export default function Category() {
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
            toLink={`/products/${item.category}`}
          >
            {item.label}
          </CategoryCard>
        ))}
      </div>
    </section>
  );
}
