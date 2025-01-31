export default function IconButton({ children, url, description, isText }) {
  const cssClassButton = isText
    ? "cursor-pointer bg-transparent flex items-center gap-[0.5rem] hover:bg-[#F6F6F6] p-[0.5rem] rounded-[0.25rem]"
    : "cursor-pointer bg-transparent hover:bg-[#797979] p-[0.5rem] rounded-[0.25rem]";

  const cssClassImg = isText
    ? ""
    : "hover:bg-[#797979] p-[0.5rem] rounded-[0.25rem]";

  return (
    <button className={cssClassButton}>
      {isText && <img className={cssClassImg} src={url} alt={description} />}
      {children}
    </button>
  );
}
