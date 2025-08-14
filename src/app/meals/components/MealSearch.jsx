"use client";
import React, { useState, useEffect } from "react";
// ✅ Changed import: usePathname instead of useParams to get the current path
import { useRouter, usePathname } from "next/navigation";

export default function MealSearch() {
  // ✅ Moved hooks inside component
  // ✅ Changed search state from array [] to string "" because input value should be string
  const [search, setSearch] = useState("");

  const router = useRouter();
  const pathname = usePathname(); // ✅ Correct way to get current pathname

  useEffect(() => {
    // ✅ Only run if search has some value
    if (search) {
      // ✅ Corrected URLSearchParams usage
      const urlQueryParam = new URLSearchParams({ search });
      router.push(`${pathname}?${urlQueryParam}`); // ✅ Use pathname + query string
    }
    // ✅ Added pathname and router to dependency array
  }, [search, pathname, router]);

  return (
    <div className="mb-6 w-full max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Search meals..."
        value={search} // ✅ Correct binding of input to state
        onChange={(e) => setSearch(e.target.value)}
        // ✅ Fixed Tailwind classes: w-full instead of invalid w-4xl, removed unnecessary flex
        className="border p-2 rounded w-full"
      />
    </div>
  );
}
