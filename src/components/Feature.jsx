const Feature = ({ label, value, imageUrl }) => {
  return (
    <div className="flex items-center gap-[1rem]">
      <div className="p-[1rem] rounded-[0.5rem] bg-[#F6F6F6]">
        <img src={imageUrl} alt="Delivery image" />
      </div>
      <div className="flex flex-col">
        <p className="text-[0.75rem] text-[#717171]">{label}</p>
        <p className="text-[0.75rem] font-medium">{value}</p>
      </div>
    </div>
  );
};

export default Feature;
