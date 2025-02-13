import { useState } from "react";

import downArrowImg from "../../assets/downArrow.svg";
import upArrowImg from "../../assets/upArrow.svg";

const Dropdown = ({ title, isDifferent, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <li className="flex flex-col gap-[1.5rem] relative">
      <div
        onClick={handleClick}
        className={`flex justify-between py-[0.75rem] cursor-pointer ${
          !isDifferent && "border-b-1 border-[#B5B5B5]"
        }`}
      >
        <p className="text-[1.125rem] font-semibold">{title}</p>
        <img src={isOpen ? upArrowImg : downArrowImg} alt="Down/Up Arrow" />
      </div>

      <div
        className={`gap-2 ${!isOpen && "hidden"} ${
          isDifferent && "absolute top-10"
        }`}
      >
        {children}
      </div>
    </li>
  );
};

export default Dropdown;
