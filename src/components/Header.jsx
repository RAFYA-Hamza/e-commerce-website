import logoImg from "../assets/logo.svg";

import IconButton from "./UI/IconButton";
import SearchField from "./UI/SearchField";

import categoryItems from "../utils/categoryItems";
import { useNavigate } from "react-router-dom";

// const navItem = ["Home", "About", "Contact Us", "Blog"];

export default function Header() {
  const navigate = useNavigate();

  function handleClick() {
    console.log("clicked");
  }

  return (
    <>
      <header className="h-[5.5rem] px-[10rem] py-[1rem] flex justify-between items-center gap-2rem">
        <img src={logoImg} alt="My logo" />

        <SearchField />

        <ul className="flex justify-between gap-[3.25rem] text-[#656565]">
          <li>
            <a className="hover:text-black" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-black" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-black" href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a className="hover:text-black" href="#">
              Blog
            </a>
          </li>
        </ul>

        <div className="flex gap-[1rem]">
          <IconButton>
            <svg
              width="24px"
              height="24px"
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
                  // fill="red"
                  stroke="#000000"
                  strokeWidth="1.4"
                ></path>
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
                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                  stroke="#000000"
                  strokeWidth="2"
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
                  fill="#000000"
                />
              </g>
            </svg>
          </IconButton>
        </div>
      </header>
      <nav className="w-full px-[10rem] py-[0.5rem] flex justify-between bg-[#2E2E2E] text-[#797979]">
        {categoryItems.map((item, index) => (
          <IconButton
            onSelect={() => {
              navigate(`/products/${item.category}`);
              window.scrollTo(0, 0);
            }}
            key={index}
            isText={true}
            url={item.url}
            description={item.description}
          >
            {item.label}
          </IconButton>
        ))}
      </nav>
    </>
  );
}
