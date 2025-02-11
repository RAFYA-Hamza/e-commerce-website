const RadioButton = ({ label }) => {
  return (
    <div className="flex items-center gap-[0.5rem]">
      <input
        className="w-[1rem] h-[1rem] border-4 cursor-pointer"
        type="radio"
        name="smartphones"
        id="apple"
        value="Apple"
      />
      <label className="font-semibold" htmlFor="apple">
        {label} <span className="font-light text-[#A4A4A4]">2</span>
      </label>
    </div>
  );
};

export default RadioButton;
