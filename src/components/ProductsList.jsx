import TextButton from "./UI/TextButton";
import product1 from "../assets/product1.png";
import ProductItem from "./UI/ProductItem";

export default function ProductsList({ data }) {
  return (
    <>
      <section className="py-[3.5rem] px-[10rem] flex flex-col gap-[2rem]">
        <div className="flex gap-[0.5rem]">
          <TextButton isActive={true} label="New Arrival" />
          <TextButton label="Bestseller" />
          <TextButton label="Featured Products" />
        </div>
        <ul className="grid grid-cols-4 grid-flow-row gap-[1rem]">
          {data?.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              price={product.price}
              urlImage={product1}
            />
          ))}
        </ul>
      </section>
      <section className="py-[5rem] px-[10rem] flex flex-col gap-[2rem] bg-[#F6F6F6]">
        <h1 className="text-[1.5rem] font-semibold">Discounts up to -50%</h1>
        <ul className="grid grid-cols-4 grid-flow-row gap-[1rem]">
          {data?.slice(1, 3).map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              price={product.price}
              urlImage={product1}
              isWhite={true}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
