export default function IconButton({
  children,
  url,
  description,
  isText,
  onSelect,
}) {
  var cssClassButton =
    "cursor-pointer bg-transparent hover:bg-[#797979] p-[0.5rem] rounded-[0.25rem]";

  if (isText) {
    cssClassButton =
      "cursor-pointer bg-transparent flex items-center gap-[0.5rem] hover:bg-[#F6F6F6] p-[0.5rem] rounded-[0.25rem]";
  }

  return (
    <button onClick={onSelect} className={cssClassButton}>
      {isText && <img src={url} alt={description} />}
      {children}
    </button>
  );
}
