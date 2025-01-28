import logoImg from "../assets/logo.svg";
import cartImg from "../assets/cart.svg";
import favoriteImg from "../assets/favorite.svg";
import profileImg from "../assets/profile.svg";

// const navItem = ["Home", "About", "Contact Us", "Blog"];

export default function Header() {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <header className="px-[10rem] py-[1rem] flex gap-[2rem] items-center">
      <div>
        <img src={logoImg} alt="My logo" />
      </div>

      <div className="w-full max-w-[27rem]">
        <input className="w-full" type="text" placeholder="Search" />
      </div>

      <nav>
        <ul className="flex gap-[3.25rem]">
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

      <div>
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
