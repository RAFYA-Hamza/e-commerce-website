import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

const ProductsLayout = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  let queryEntries = Array.from(searchParams.entries());
  queryEntries = [...queryEntries.slice(1).map((array) => array)];

  if (queryEntries.length <= 0) {
    queryEntries.push(["Category", params.category]);
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {queryEntries.map(([key, value], index) => {
            return index % 2 !== 0 ? (
              <li key={index}>
                <span>{`> ${key}`}</span>
                <span to={`?${key}=${value}`}>{`> ${value}`}</span>
              </li>
            ) : (
              <li key={index}>
                <span>{key !== "name" && `> ${key}`}</span>
                <Link>{`> ${value}`}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default ProductsLayout;
