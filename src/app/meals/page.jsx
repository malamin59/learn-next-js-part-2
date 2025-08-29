import Link from "next/link";
import MealSearch from "./components/MealSearch";
import NotFoundMeal from "./components/NotFoundMeal";
import Image from "next/image";
import { Roboto } from "next/font/google";
export const metadata = {
  title: {
    default: "all meals ",
  },
  description: "loading json Pleas holder",
};

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

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
              className={`border rounded-lg shadow p-4 hover:shadow-lg transition ${roboto.className}`}
            >
              <Link href={`/meals/${meal.idMeal}`}>
                {meal?.strMealThumb ? ( 
                  <Image
                    width={200}
                    height={320}
                    src={meal.strMealThumb}
                    alt={meal.strMeal || "Meal"}
                    className="w-full h-48 object-cover rounded"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
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
