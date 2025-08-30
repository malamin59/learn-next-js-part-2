import React from "react";

export const metadata = {
  title: {
    default: "All Products",
  },
  description: "Loading Products",
};

export default async function ProductsPage() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache",
  });
  const data = await res.json();

  // Extract the array
  const products = data.result;

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <div className="mt-12">
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.productName}</li>
        ))}
      </ul>
    </div>
  );
}
