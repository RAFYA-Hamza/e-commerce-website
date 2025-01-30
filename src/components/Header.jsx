import logoImg from "../assets/logo.svg";
import cartImg from "../assets/cart.svg";
import favoriteImg from "../assets/favorite.svg";
import profileImg from "../assets/profile.svg";
import searchImg from "../assets/search.svg";

import IconButton from "./UI/IconButton";

// const navItem = ["Home", "About", "Contact Us", "Blog"];

export default function Header() {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <header className="h-[5.5rem] px-[10rem] py-[1rem] flex justify-between items-center gap-2rem">
      <div>
        <img src={logoImg} alt="My logo" />
      </div>

      <div className="w-full h-full max-w-[32rem] px-[1rem] py-[1rem] pl-[3rem] relative flex items-center bg-[#F5F5F5] rounded-[0.75rem]">
        <img
          className="absolute left-[0.75rem]"
          src={searchImg}
          alt="Search icon"
        />
        <input
          className="w-full px-[0.25rem] py-[0.25rem]"
          type="text"
          placeholder="Search..."
        />
      </div>

      <nav>
        <ul className="flex justify-between gap-[3.25rem] text-[#656565]">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>

      <div className="flex gap-[1rem]">
        <IconButton url={favoriteImg} descritpion="Favorite image" />

        <IconButton url={cartImg} descritpion="Cart image" />

        <IconButton url={profileImg} descritpion="Profile image" />
      </div>
    </header>
  );
}
