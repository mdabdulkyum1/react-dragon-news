import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function CategoriesNews() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl">All Category : {categories.length}</h1>

      <div className="flex flex-col gap-3 my-3">
        <ul className="menu">
          {categories.map((category) => (
            <li key={category.category_id}>
              <NavLink to={`/${category.category_id}`} className="">
                {category.category_name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoriesNews;
