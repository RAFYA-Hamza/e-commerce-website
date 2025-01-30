export default function Button({ children, isIcon, type }) {
  const cssClass =
    type === "blackStroke"
      ? "border-black text-black"
      : "border-white text-white";

  const classButton = `py-[1rem] px-[4rem] flex rounded-[0.5rem] border-2 border-solid ${cssClass}`;

  return (
    <button className={classButton}>
      {children}
      {isIcon && (
        <svg
          className={type === "blackStroke" ? "text-black" : "text-white"}
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
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      )}
    </button>
  );
}
