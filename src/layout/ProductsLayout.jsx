import { Link, Outlet, useParams } from "react-router-dom";

const ProductsLayout = () => {
  //   const urlParams = useParams();

  //   const pathObj = ["Catalog", "Brand"];

  //   console.log(urlParams);

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

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
