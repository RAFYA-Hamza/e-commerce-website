const Details = ({ label, value, imageUrl, altDescription }) => {
  return (
    <div className="flex gap-[0.5rem] p-[1rem] bg-[#F4F4F4] rounded-[0.5rem]">
      <img src={imageUrl} alt={altDescription} />
      <div className="flex flex-col">
        <p className="text-[#A7A7A7] text-[0.75rem]">{label}</p>
        <p className="text-[#4E4E4E] text-[0.75rem]">{value}</p>
      </div>
    </div>
  );
};

export default Details;
