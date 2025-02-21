export default function Button({ children, isIcon, type, onSelect }) {
  var cssClass;

  if (type === "blackStroke") {
    cssClass = "border-2 border-solid border-black text-black";
  } else if (type === "whiteStroke") {
    cssClass = "border-2 border-solid border-white text-white";
  } else {
    cssClass = "bg-black text-white";
  }

  const classButton = `py-[1rem] px-[4rem] flex gap-[1rem] justify-center items-center flex-1 rounded-[0.5rem] cursor-pointer ${cssClass}`;

  return (
    <button onClick={onSelect} className={classButton}>
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
