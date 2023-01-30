import React from "react";
import { getCategories } from "../utils/utils";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
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
        setSearchParams({ category: e.target.value });
      }}
      value={searchParams}
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
