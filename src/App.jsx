import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import HomePage, { loader as newProductsLoader } from "./pages/Home";
import ProductsPage, { loader as productsLoader } from "./pages/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} loader={newProductsLoader} />
      <Route
        path="products"
        element={<ProductsPage />}
        loader={productsLoader}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
