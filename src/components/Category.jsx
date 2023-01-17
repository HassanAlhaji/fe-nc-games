import React from "react";
import { getCategories } from "../utils/utils";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(selectedCategory);
  useEffect(() => {
    getCategories()
      .then((categorye) => {
        return setCategories(categorye);
      })
      .catch((err) => {});
  }, []);

  return (
    <select
      onChange={(e) => {
        setSelectedCategory(e.target.value);
      }}
      value={selectedCategory}
    >
      <option>All</option>
      {categories.map((category) => {
        return (
          <option value={category.slug} key={category.description}>
            {category.slug}
          </option>
        );
      })}
    </select>
  );
};

export default Category;
