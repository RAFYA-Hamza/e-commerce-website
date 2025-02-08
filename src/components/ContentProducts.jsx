import { useLoaderData, useSearchParams } from "react-router-dom";

const ContentProducts = () => {
  const { products } = useLoaderData();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  return (
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
            />
          ));
        }}
      </AsyncLoader>
    </ul>
  );
};

export default ContentProducts;
