const Tabs = ({ label, status }) => {
  let cssClass = "border-black text-black cursor-pointer";

  if (status === "noActive") {
    cssClass = "border-[#D5D5D5] text-[#D5D5D5]";
  }

  if (status === "active") {
    cssClass = "border-[#D5D5D5] text-[#6F6F6F]";
  }

  function handleClick() {
    console.log("clicked");
  }

  return (
    <button
      disabled={status === "noActive" && true}
      onClick={handleClick}
      className={`max-[6rem]: py-[1rem] px-[1.5rem] rounded-[1rem] border-1 ${cssClass}`}
    >
      {label}
    </button>
  );
};

export default Tabs;
