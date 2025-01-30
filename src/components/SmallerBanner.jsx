import playstationImg from "../assets/PlayStation.png";
import macbookImg from "../assets/MacBook.png";
import airpodsImg from "../assets/airPods.png";
import visioproImg from "../assets/visioPro.png";

import Button from "./UI/Button";

export default function SmallerBanner() {
  return (
    <section className="grid grid-cols-4 grid-rows-2">
      <div className="col-span-2 row-span-1 pr-[3rem] flex items-center">
        <img src={playstationImg} alt="Playstation product" />
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[3rem] font-semibold leading-none">
            Playstation 5
          </h1>
          <p className="text-[0.8rem] text-[#909090]">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div className="col-span-2 row-span-2 py-[2.75rem] pl-[2.75rem] flex items-center bg-[#EDEDED]">
        <div className="flex flex-col items-start gap-[1rem]">
          <h1 className="text-[3rem] font-thin leading-none">
            Macbook <span className="font-bold">Air</span>{" "}
          </h1>
          <p className="text-[0.8rem] text-[#909090]">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <Button type="blackStroke">Shop Now</Button>
        </div>
        <img src={macbookImg} alt="MacBook product" />
      </div>

      <div className="col-span-1 row-span-1 pr-[3rem] flex items-center gap-[3rem] bg-[#EDEDED]">
        <img src={airpodsImg} alt="Playstation product" />
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[1.81rem] leading-9">
            Apple AirPods <span className="font-bold">Max</span>
          </h1>
          <p className="text-[0.8rem] text-[#909090]">
            Computational audio. Listen, it's powerful
          </p>
        </div>
      </div>

      <div className="col-span-1 row-span-1 pr-[3rem] flex items-center gap-[3rem] bg-[#353535]">
        <img src={visioproImg} alt="Visio Pro product" />
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[1.81rem] leading-9 text-[#ffff]">
            Apple Vision <span className="font-bold">Pro</span>
          </h1>
          <p className="text-[0.8rem] text-[#909090]">
            An immersive way to experience entertainment
          </p>
        </div>
      </div>
    </section>
  );
}
