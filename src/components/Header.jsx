import logoImg from "../assets/logo.svg";

// const navItem = ["Home", "About", "Contact Us", "Blog"];

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="My logo" />
      <input type="text" placeholder="Search" />

      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </li>
        </ul>
      </nav>

      <div>
        <button></button>

        <button></button>

        <button></button>
      </div>
    </header>
  );
}
