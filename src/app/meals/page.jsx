"use client";
import React, { useEffect, useState } from "react";

export default function MealsPage() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data?.meals || []);
    } catch (error) {
      console.log(error);
      setMeals([]);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);

  return (
    <div className="mt-12">
      {meals.length > 0 ? (
        meals.map((meal) => (
          <div key={meal.idMeal}>{meal.strMeal}</div>
        ))
      ) : (
        <p>No meals found</p>
      )}
    </div>
  );
}
