import Link from "next/link";
import MealSearch from "./components/MealSearch";
import NotFoundMeal from "./components/NotFoundMeal";

export const metadata = {
  title: {
    default: "all meals ",
  },
  description: "loading json Pleas holder",
};

export default async function MealsPage({ searchParams }) {
  const query = await searchParams;
  const searchTerm = query?.search || "";

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await res.json();
      return data?.meals || []; // ✅ Always return an array
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div className="mt-12 px-4">
      <MealSearch />

      {meals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="border rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              <Link href={`/meals/${meal.idMeal}`}>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover rounded"
                />
              </Link>
              <h2 className="text-lg font-bold mt-2">{meal.strMeal}</h2>
              <p className="text-sm text-gray-600">
                Category: {meal.strCategory || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                Area: {meal.strArea || "N/A"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <NotFoundMeal />
      )}
    </div>
  );
}
