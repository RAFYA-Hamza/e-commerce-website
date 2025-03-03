const Tabs = ({ label, status }) => {
  let cssClass = "border-black text-black";

  if (status === "noActive") {
    cssClass = "border-[#D5D5D5] text-[#D5D5D5]";
  }

  if (status === "active") {
    cssClass = "border-[#D5D5D5] text-[#6F6F6F]";
  }

  return (
    <button
      className={`max-[6rem]: py-[1rem] px-[1.5rem] rounded-[1rem] cursor-pointer border-1 ${cssClass}`}
    >
      {label}
    </button>
  );
};

export default Tabs;
