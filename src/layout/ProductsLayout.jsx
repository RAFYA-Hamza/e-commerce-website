import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useOutletContext,
  useParams,
  useRouteLoaderData,
  useSearchParams,
} from "react-router-dom";
import AsyncLoader from "../components/AsyncLoader";

const ProductsLayout = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const category = searchParams.get("category");
  const brand = searchParams.get("brand");

  const location = useLocation();

  console.log(category);
  console.log(brand);
  console.log(params);

  //   console.log(category);
  //   console.log(brand);

  //   const { product } = useRouteLoaderData("product-detail");

  //   const pathObj = ["Catalog", "Brand"];

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <AsyncLoader promise={products}>
          {(loadedProduct) => {
            console.log(loadedProduct[2].category);
          }}
        </AsyncLoader> */}

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
