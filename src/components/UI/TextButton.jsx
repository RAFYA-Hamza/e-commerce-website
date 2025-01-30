export default function TextButton({ label, isActive }) {
  const cssClass = !isActive && "text-[#8B8B8B]";
  return (
    <div
      className={`flex flex-col justify-center py-[0.5rem] px-[0.75rem] rounded-[1rem] hover:bg-[#d6d6d6] ${cssClass}`}
    >
      <button className="cursor-pointer">{label}</button>
      {isActive && (
        <span className="w-full h-0.75 underline rounded-[1rem] bg-black"></span>
      )}
    </div>
  );
}
