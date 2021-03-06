import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import giphy from "./media/images/giphy.png";

const App = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className="container p-5 mb-5">
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
              <p>
                <strong>Built by: Alonso Parra</strong>
              </p>
            </div>
          </div>
        </div>

        <AddCategory setCategories={setCategories} />

        {categories.map((category, i) => (
          <GifGrid key={i} category={category} />
        ))}
      </div>

      <nav className="navbar fixed-bottom navbar-dark bg-dark text-white custom-footer">
        <div className="mx-auto">
          <div className="d-flex flex-row justify-align-content-center align-items-center">
            <p className="text-center">
              Check the code on my Github repository
            </p>
            <p className="text-center">
              <a
                href="https://github.com/alonsogchparra/gif-expert-app-react"
                target="_blank"
                rel="noreferrer"
                className="mx-2"
              >
                {" "}
                <i>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </i>
              </a>{" "}
            </p>
            <p className="text-center">
              Copyright &copy; 2021 El Vig??a. M??rida. Venezuela
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
