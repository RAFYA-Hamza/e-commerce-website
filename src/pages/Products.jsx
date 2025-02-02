import { useLoaderData, useSearchParams } from "react-router-dom";
import { LoadProductsContext } from "../store/LoadProductsContext";
import { useContext, useEffect, useState } from "react";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useContext(LoadProductsContext);
  const [isEmpty, setIsEmpty] = useState(false);

  const category = searchParams.get("category");

  if (isLoading) {
    return <p>Fetching data...</p>;
  }

  if (error) {
    return <p>Fetching data failed!</p>;
  }

  const newData = data?.filter((product) => product.category === category);

  useEffect(() => {
    if (newData <= 0) {
      setIsEmpty(true);
    }
  }, [data]);

  return (
    <>
      <h1>The product page</h1>
      {isEmpty ? (
        <p>No data</p>
      ) : (
        <ul>
          {newData?.map((product) => (
            <li key={product.id}>{product.category}</li>
          ))}
        </ul>
      )}
    </>
  );
}
