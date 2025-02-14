const RadioButton = ({ label, id, name }) => {
  console.log(id);
  return (
    <div className="flex items-center gap-[0.5rem]">
      <input
        className="w-[1rem] h-[1rem] border-4 cursor-pointer"
        type="radio"
        name={name}
        id={id}
        value={label}
      />
      <label className="font-semibold" htmlFor={id}>
        {label} <span className="font-light text-[#A4A4A4]">2</span>
      </label>
    </div>
  );
};

export default RadioButton;
