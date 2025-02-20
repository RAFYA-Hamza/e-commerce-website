import logoPhone from "../assets/icons/sizeScreen.svg";

const Details = () => {
  return (
    <div className="flex gap-[0.5rem] p-[1rem] bg-[#F4F4F4] rounded-[0.5rem]">
      <img src={logoPhone} alt="Logo" />
      <div className="flex flex-col">
        <p className="text-[#A7A7A7] text-[0.75rem]">Screen size</p>
        <p className="text-[#4E4E4E] text-[0.75rem]">6.7""</p>
      </div>
    </div>
  );
};

export default Details;
