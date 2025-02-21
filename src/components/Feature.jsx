import deliveryImg from "../assets/icons/deliveryImage.svg";

const Feature = () => {
  return (
    <div className="flex items-center gap-[1rem]">
      <div className="p-[1rem] rounded-[0.5rem] bg-[#F6F6F6]">
        <img src={deliveryImg} alt="Delivery image" />
      </div>
      <div className="flex flex-col">
        <p className="text-[0.75rem] text-[#717171]">Free Delivery</p>
        <p className="text-[0.75rem] font-medium">1-2 day</p>
      </div>
    </div>
  );
};

export default Feature;
