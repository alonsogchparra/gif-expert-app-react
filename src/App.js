import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import giphy from "./media/images/giphy-logo.png";

const App = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className="container p-5">
      <div className="animate__animated animate__fadeInUp">
        <div className="row">
          <div className="mx-auto">
            <div className="text-center">
              <h1>GifExpertApp</h1>
              <p>Gifs by</p>
              <img src={giphy} alt="giphy logo" style={{ width: "200px" }} />
              <p className="mt-3">
                Source Information:{" "}
                <a
                  href="https://www.udemy.com/course/react-cero-experto/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Fernando Herrera. Udemy's Course
                </a>
              </p>
              <p>Built by: Alonso Parra</p>
            </div>
          </div>
        </div>

        <AddCategory setCategories={setCategories} />

        {categories.map((category, i) => (
          <GifGrid key={i} category={category} />
        ))}
      </div>
    </div>
  );
};

export default App;
