import { useState } from "react";

import downArrowImg from "../../assets/downArrow.svg";
import upArrowImg from "../../assets/upArrow.svg";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
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
