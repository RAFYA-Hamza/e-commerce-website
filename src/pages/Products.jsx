const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
  { id: "p4", title: "Product 4" },
];

export default function ProductsPage() {
  return (
    <>
      <h1>The product page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}
