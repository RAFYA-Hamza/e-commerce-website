import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import Banner from "../components/Banner";
import Category from "../components/Category";
import ProductsList from "../components/ProductsList";

export default function HomePage() {
  const { events } = useLoaderData();

  return (
    <>
      <Banner />
      <Category />
      <Suspense fallback={<p style={{ textAlign: "center" }}> Loading...</p>}>
        <Await resolve={events}>
          {(loadedProducts) => <ProductsList data={loadedProducts} />}
        </Await>
      </Suspense>
    </>
  );
}

export async function loadProducts() {
  const response = await fetch("http://localhost:8080/products");

  if (!response.ok) {
    console.log("Couldn't fetch data...");
    return;
  }

  // const resData = await response.json();
  // console.log(resData);

  return {
    events: await response.json(),
  };
}
