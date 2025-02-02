import { createContext } from "react";
import useHttp from "../hooks/useHttp";

export const LoadProductsContext = createContext();

export function LoadProductsProvider({ children }) {
  const { data, isLoading, error } = useHttp("http://localhost:8080/products");

  return (
    <LoadProductsContext.Provider value={{ data, isLoading, error }}>
      {children}
    </LoadProductsContext.Provider>
  );
}
