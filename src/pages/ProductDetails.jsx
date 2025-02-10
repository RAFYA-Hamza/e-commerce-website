import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
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
          {(loadedProduct) => {
            return (
              <ProductItem
                key={loadedProduct.id}
                name={loadedProduct.name}
                price={loadedProduct.price}
                urlImage={`http://localhost:8080/${loadedProduct.image}`}
              />
            );
          }}
        </AsyncLoader>
      </ul>
    </>
  );
};

export default ProductDetails;

const loadProduct = async ({ request, params }) => {
  const { category } = params;
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  const resData = await sendHttpRequest(
    `http://localhost:8080/products/${category}/${id}`
  );

  return resData;
};

export const loader = ({ request, params }) => {
  return {
    product: loadProduct({ request, params }),
  };
};
