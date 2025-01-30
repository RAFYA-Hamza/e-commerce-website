export default function IconButton({ children, url, descritpion }) {
  const cssClassButton = children
    ? "cursor-pointer bg-transparent flex items-center gap-[0.5rem] hover:bg-[#F6F6F6] p-[0.5rem] rounded-[0.25rem]"
    : "cursor-pointer bg-transparent";
  const cssClassImg = children
    ? ""
    : "hover:bg-[#F6F6F6] p-[0.5rem] rounded-[0.25rem]";

  return (
    <button className={cssClassButton}>
      <img className={cssClassImg} src={url} alt={descritpion} />
      {children}
    </button>
  );
}
