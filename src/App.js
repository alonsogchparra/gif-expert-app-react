import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const App = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className="container p-5">
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />

      {categories.map((category, i) => (
        <GifGrid key={i} category={category} />
      ))}
    </div>
  );
};

export default App;
