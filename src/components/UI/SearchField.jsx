import searchImg from "../../assets/search.svg";

const SearchField = ({ isMin }) => {
  return (
    <div
      className={`w-full h-full max-w-[32rem] relative flex items-center bg-[#F5F5F5] rounded-[0.75rem] ${
        isMin
          ? "px-[0.5rem] py-[0.5rem] pl-[3rem]"
          : "px-[1rem] py-[1rem] pl-[3rem]"
      }`}
    >
      <img
        className="absolute left-[0.75rem]"
        src={searchImg}
        alt="Search icon"
      />
      <input
        className="w-full px-[0.25rem] py-[0.25rem] focus:outline-none text-[#656565]"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchField;
