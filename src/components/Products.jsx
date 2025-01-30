import TextButton from "./UI/TextButton";

export default function Products() {
  return (
    <section className="py-[3.5rem] px-[10rem] flex flex-col gap-[2rem]">
      <div className="flex gap-[0.5rem]">
        <TextButton isActive={true} label="New Arrival" />
        <TextButton label="Bestseller" />
        <TextButton label="Featured Products" />
      </div>
      <div>Card</div>
    </section>
  );
}
