import Banner from "../components/Banner";
import Category from "../components/Category";
import DiscountProducts from "../components/DiscountProducts";
import HomeProducts from "../components/HomeProducts";

import { sendHttpRequest } from "../hooks/useHttp";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Category />
      <HomeProducts />
      <DiscountProducts />
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
