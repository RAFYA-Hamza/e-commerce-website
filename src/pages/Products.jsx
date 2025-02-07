import { sendHttpRequest } from "../hooks/useHttp";

export default function ProductsPage() {
  return (
    <>
      <h1>The product page</h1>
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
