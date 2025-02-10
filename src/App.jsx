import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import HomePage, { loader as newProductsLoader } from "./pages/Home";
import ProductsPage, { loader as productsLoader } from "./pages/Products";
import ProductsLayout from "./layout/ProductsLayout";
import ProductDetails, {
  loader as ProductDetailsLoader,
} from "./pages/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} loader={newProductsLoader} />

      <Route path="products/:category" element={<ProductsLayout />}>
        <Route
          index
          id="products"
          element={<ProductsPage />}
          loader={productsLoader}
        />
        <Route
          path="details"
          id="product-details"
          element={<ProductDetails />}
          loader={ProductDetailsLoader}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
