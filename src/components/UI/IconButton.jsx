export default function IconButton({ url, descritpion }) {
  return (
    <button className="cursor-pointer bg-transparent">
      <img
        className="hover:bg-[#F6F6F6] p-[0.5rem] rounded-[0.25rem]"
        src={url}
        alt={descritpion}
      />
    </button>
  );
}
