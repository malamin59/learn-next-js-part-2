import { dbConnect } from "@/lib/dbConnect";
import React from "react";
import { getProducts } from "../actions/products/getProducts";

export const metadata = {
  title: "All Products",
  description: "Loading products",
};

export default async function ProductsPage() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const res = await fetch(`${baseUrl}/api/items`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }



      const data = await res.json();
    console.log(data)

    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <ul className="space-y-2">
          {data.result?.map((product) => (
            <li key={product._id} className="border p-2 rounded">
              {product.name || product.productName}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (err) {
    return (
      <div className="text-red-500">Error loading products: {err.message}</div>
    );
  }
}
