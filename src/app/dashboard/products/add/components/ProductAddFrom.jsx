"use client"; // this is required for Client Components

import { useRouter } from "next/navigation";
import React from "react";

export default function ProductAddForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;

    const payload = { productName };

    try {
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
      const res = await fetch(`${baseUrl}/api/items`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to add product");
      }

      form.reset();
      router.push("/products"); // redirect to products page
    } catch (err) {
      console.error("Error adding product:", err);
      alert("Failed to add product. Check console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="productName"
        placeholder="Product Name"
        required
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Product
      </button>
    </form>
  );
}
