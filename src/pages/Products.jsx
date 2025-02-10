import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { sendHttpRequest } from "../hooks/useHttp";
import AsyncLoader from "../components/AsyncLoader";
import ProductItem from "../components/UI/ProductItem";

export default function ProductsPage() {
  const { products } = useLoaderData();
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <ul className="grid grid-cols-6 grid-flow-row gap-[1rem]">
        <AsyncLoader promise={products}>
          {(loadedProducts) => {
            const filteredProducts = loadedProducts?.filter(
              (product) => product.category === category
            );

            if (filteredProducts.length <= 0) {
              return <p>There is no product for this category</p>;
            }

            return filteredProducts?.map((product) => (
              <ProductItem
                key={product.id}
                name={product.name}
                price={product.price}
                urlImage={`http://localhost:8080/${product.image}`}
                onSelect={() =>
                  navigate(
                    `details?id=${product.id}&Category=${product.category}&Brand=${product.Brand}&name=${product.name}`
                  )
                }
              />
            ));
          }}
        </AsyncLoader>
      </ul>
    </>
  );
}

const loadProducts = async ({ params }) => {
  const { category } = params;
  const resData = await sendHttpRequest(
    "http://localhost:8080/products/" + category
  );

  return resData;
};

export const loader = ({ params }) => {
  return {
    products: loadProducts({ params }),
  };
};
