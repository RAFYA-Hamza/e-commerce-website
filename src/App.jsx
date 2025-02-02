import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import { LoadProductsProvider } from "./store/LoadProductsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

function App() {
  return (
    <LoadProductsProvider>
      <RouterProvider router={router} />
    </LoadProductsProvider>
  );
}

export default App;
