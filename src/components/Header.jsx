import logoImg from "../assets/logo.svg";
import cartImg from "../assets/cart.svg";
import favoriteImg from "../assets/favorite.svg";
import profileImg from "../assets/profile.svg";
import searchImg from "../assets/search.svg";

// const navItem = ["Home", "About", "Contact Us", "Blog"];

export default function Header() {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <header className="h-[5.5rem] px-[10rem] py-[1rem] flex justify-between items-center">
      <div>
        <img src={logoImg} alt="My logo" />
      </div>

      <div className="w-full h-full max-w-[27rem] px-[1.25rem] pl-[3rem] relative flex items-center">
        <img
          className="absolute left-[0.75rem] top-[1rem]"
          src={searchImg}
          alt="Search icon"
        />
        <input className="w-full" type="text" placeholder="Search" />
      </div>

      <nav>
        <ul className="flex justify-between gap-[3.25rem]">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </nav>

      <div className="flex gap-[1.5rem]">
        <button onClick={handleClick}>
          <img src={favoriteImg} alt="Favorite image" />
        </button>

        <button>
          <img src={cartImg} alt="Cart image" />
        </button>

        <button>
          <img src={profileImg} alt="Profile image" />
        </button>
      </div>
    </header>
  );
}
