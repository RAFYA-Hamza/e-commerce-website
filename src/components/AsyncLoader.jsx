import { Await } from "react-router-dom";
import { Suspense } from "react";

const AsyncLoader = ({ promise, children }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={promise} errorElement={<p>Can't fetch products</p>}>
        {children}
      </Await>
    </Suspense>
  );
};

export default AsyncLoader;
