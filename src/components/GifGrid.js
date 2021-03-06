import PropTypes from "prop-types";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <hr />
      <div className="col-12 text-center mb-4">
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
      </div>

      {loading && (
        <div className="col">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}

      <div className="row row-cols-1 row-cols-md-3">
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
