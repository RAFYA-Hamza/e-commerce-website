import { useLoaderData } from "react-router-dom";
import { sendHttpRequest } from "../hooks/useHttp";
import AsyncLoader from "../components/AsyncLoader";
import ProductItem from "../components/UI/ProductItem";

const ProductDetails = () => {
  const { product } = useLoaderData();
  return (
    <>
      <h1>Products details</h1>
      <ul className="grid grid-cols-6 grid-flow-row gap-[1rem]">
        <AsyncLoader promise={product}>
          {(loadedProduct) => (
            <ProductItem
              key={loadedProduct.id}
              name={loadedProduct.name}
              price={loadedProduct.price}
              urlImage={`http://localhost:8080/${loadedProduct.image}`}
            />
          )}
        </AsyncLoader>
      </ul>
    </>
  );
};

export default ProductDetails;

const loadProduct = async ({ params }) => {
  const { id, category } = params;

  const resData = await sendHttpRequest(
    `http://localhost:8080/products/${category}/${id}`
  );

  return resData;
};

export const loader = ({ params }) => {
  return {
    product: loadProduct({ params }),
  };
};
