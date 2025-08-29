import React from "react";
import NotFoundMeal from "../components/NotFoundMeal";


export const getSingleMeal = async (meal_id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal_id}`
  );

  if (!res.ok) throw new Error("Failed to fetch meal");

  const data = await res.json();
  return data?.meals?.[0] || null;
};

export async function generateMetadata({ params }) {
  const { id } = params;
  const meal = await getSingleMeal(id);

  return {
    title: meal?.strMeal || "Meal Not Found",
    description: meal?.strInstructions?.slice(0, 150) || "No description available",
  };
}

// ✅ Page Component
export default async function SingleMealPage({ params }) {
  const { id } = params;
  const meal = await getSingleMeal(id);

  if (!meal) {
    return <NotFoundMeal/>
  }

  return (
    <div className="max-w-2xl mx-auto pb-16 mt-12 px-4">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-96 rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{meal.strMeal}</h1>
      <p className="text-gray-600 mt-2">
        Category: {meal.strCategory || "N/A"}
      </p>
      <p className="text-gray-600">Area: {meal.strArea || "N/A"}</p>

      <h2 className="text-xl font-semibold mt-6">Instructions</h2>
      <p className="mt-2 text-gray-700 leading-relaxed">{meal.strInstructions}</p>
    </div>
  );
}