export default function CategoryCard({ url, description, children, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className="w-full max-w-[10rem] flex flex-col items-center gap-[0.5rem] py-[2rem] px-[1rem] bg-[#EDEDED] font-semibold rounded-2xl cursor-pointer hover:bg-[#d6d6d6]"
    >
      <img className="w-[2rem]" src={url} alt={description} />
      {children}
    </button>
  );
}
