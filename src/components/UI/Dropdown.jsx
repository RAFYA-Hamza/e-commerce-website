import { useState } from "react";

import downArrowImg from "../../assets/downArrow.svg";
import upArrowImg from "../../assets/upArrow.svg";

const Dropdown = ({ title, isRating, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  if (isRating) {
    return (
      <div className="flex flex-col relative">
        <div
          onClick={handleClick}
          className="flex justify-between gap-[8rem] py-[0.5rem] px-[1rem] border-1 border-[#D4D4D4] rounded-[0.5rem] cursor-pointer"
        >
          <p className="text-[1.125rem] font-light">{title}</p>
          <img src={isOpen ? upArrowImg : downArrowImg} alt="Down/Up Arrow" />
        </div>

        <div
          className={`w-full absolute top-[100%] py-[0.25rem] ${
            !isOpen && "hidden"
          }`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <li className="flex flex-col gap-[1.5rem]">
      <div
        onClick={handleClick}
        className="flex justify-between py-[0.75rem] border-b-1 border-[#B5B5B5] cursor-pointer"
      >
        <p className="text-[1.125rem] font-semibold">{title}</p>
        <img src={isOpen ? upArrowImg : downArrowImg} alt="Down/Up Arrow" />
      </div>

      <div className={`gap-2 ${!isOpen && "hidden"}`}>{children}</div>
    </li>
  );
};

export default Dropdown;
