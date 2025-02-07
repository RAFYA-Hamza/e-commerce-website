import { useLoaderData } from "react-router-dom";
import { sendHttpRequest } from "../hooks/useHttp";
import AsyncLoader from "../components/AsyncLoader";
import ProductItem from "../components/UI/ProductItem";

export default function ProductsPage() {
  const { products } = useLoaderData();

  console.log(products);
  return (
    <>
      <h1>The product page</h1>
      <ul className="grid grid-cols-6 grid-flow-row gap-[1rem]">
        <AsyncLoader promise={products}>
          {(loadedProducts) =>
            loadedProducts.map((product) => (
              <ProductItem
                key={product.id}
                name={product.name}
                price={product.price}
                urlImage={`http://localhost:8080/${product.image}`}
              />
            ))
          }
        </AsyncLoader>
      </ul>
    </>
  );
}

const loadProducts = async () => {
  const resData = await sendHttpRequest("http://localhost:8080/products");

  return resData;
};

export const loader = () => {
  return {
    products: loadProducts(),
  };
};
