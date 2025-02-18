const RadioButton = ({ label, id, name, total, onSelect, disabled }) => {
  return (
    <div className="flex items-center gap-[0.5rem]">
      <input
        disabled={disabled}
        onClick={onSelect}
        className="w-[1rem] h-[1rem] border-4 cursor-pointer"
        type="radio"
        name={name}
        id={id}
        value={label}
      />
      <label className="font-semibold" htmlFor={id}>
        {label} <span className="font-light text-[#929292]">({total})</span>
      </label>
    </div>
  );
};

export default RadioButton;
