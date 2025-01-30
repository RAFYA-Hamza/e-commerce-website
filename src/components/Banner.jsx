import iphoneImg from "../assets/IphoneImage.png";
import Button from "./UI/Button";

export default function Banner() {
  return (
    <section className="px-[10rem] py-[1rem] flex items-center justify-between bg-linear-to-r from-[#211C24] to-[#211C24]">
      <div className="flex flex-col items-start gap-[1.5rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-[#797979] font-semibold text-[1.56rem] leading-none">
            Pro.Beyond.
          </p>
          <p className="text-[#ffffff] font-extralight text-[6rem] leading-none">
            IPhone 14 Pro
          </p>
        </div>
        <p className="text-[#909090] text-[1.25rem]">
          Created to change everything for the better. For everyone
        </p>
        <Button type="whiteStroke">Shop Now</Button>
      </div>
      <div className="h-full">
        <img src={iphoneImg} alt="Iphone image" />
      </div>
    </section>
  );
}
