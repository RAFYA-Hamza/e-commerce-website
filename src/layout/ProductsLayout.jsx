import { Link, Outlet, useParams, useRouteLoaderData } from "react-router-dom";
import AsyncLoader from "../components/AsyncLoader";

const ProductsLayout = () => {
  const urlParams = useParams();

  const { product } = useRouteLoaderData("product-detail");

  //   const pathObj = ["Catalog", "Brand"];

  console.log(product);

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <AsyncLoader promise={product}>
          {(loadedProduct) => {
            console.log(loadedProduct);
          }}
        </AsyncLoader>

        {/* {pathObj.map((path, index) => (
          <li key={index}>
            <span>{`> ${path}`}</span>
            <span>{`> ${Object.values(urlParams)[index]}`}</span>
          </li>
        ))} */}
      </ul>

      <Outlet />
    </>
  );
};

export default ProductsLayout;
