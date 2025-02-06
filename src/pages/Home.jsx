import Banner from "../components/Banner";
import Category from "../components/Category";
import ProductsList from "../components/ProductsList";

import { sendHttpRequest } from "../hooks/useHttp";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Category />
      <ProductsList />
    </>
  );
}

const loadNewProducts = async () => {
  const resData = await sendHttpRequest("http://localhost:8080/");

  return resData;
};

export const loader = () => {
  return {
    products: loadNewProducts(),
  };
};
