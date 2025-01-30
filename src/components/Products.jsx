import Button from "./UI/Button";
import TextButton from "./UI/TextButton";

export default function Products() {
  return (
    <section className="py-[3.5rem] px-[10rem] flex flex-col gap-[2rem]">
      <div className="flex gap-[0.5rem]">
        <TextButton isActive={true} label="New Arrival" />
        <TextButton label="Bestseller" />
        <TextButton label="Featured Products" />
      </div>
      <ul className="grid grid-cols-4 grid-flow-row gap-[1rem]">
        <li>
          <div>
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                  fill="red"
                  stroke="#909090"
                  strokeWidth="1.4"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <div>
              <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
              <p>$1399</p>
            </div>
            <Button type="Fill">Shop Now</Button>
          </div>
        </li>
      </ul>
    </section>
  );
}
