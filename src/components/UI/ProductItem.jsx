import Button from "./Button";
import IconButton from "./IconButton";
import FavoriteIcone from "./FavoriteIcon";

export default function ProductItem({
  name,
  price,
  urlImage,
  isWhite,
  onSelect,
}) {
  return (
    <li
      className={`flex flex-col items-center gap-[1rem] overflow-hidden py-[1.5rem] px-[1rem] rounded-[0.5rem] ${
        isWhite ? "bg-white" : "bg-[#F6F6F6]"
      }`}
    >
      <div className="self-end">
        <IconButton>
          <FavoriteIcone />
        </IconButton>
      </div>

      <img
        className="w-full max-w-full aspect-square object-cover"
        src={urlImage}
        alt="Iphone 14 pro max"
      />

      <div className="flex flex-col items-center gap-[1.5rem]">
        <div className="flex flex-col items-center gap-[1rem]">
          <p className="min-h-[3rem] text-center">{name}</p>
          <p className="text-[1.5rem] font-semibold leading-none">
            {`$${price}`}
          </p>
        </div>
        <Button onSelect={onSelect} type="Fill">
          Shop Now
        </Button>
      </div>
    </li>
  );
}
