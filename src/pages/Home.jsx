import Banner from "../components/Banner";
import Category from "../components/Category";
import ProductsList from "../components/ProductsList";
import useHttp from "../hooks/useHttp";

export default function HomePage() {
  const { data, isLoading, error } = useHttp("http://localhost:8080/products");

  if (isLoading) {
    console.log("fetch");
    return <p>Fetching Products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Banner />
      <Category />
      <ProductsList data={data} />
    </>
  );
}
