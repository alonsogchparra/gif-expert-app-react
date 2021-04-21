import PropTypes from "prop-types";
import React from "react";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="col mb-4">
      <div className="card h-100 border-secondary animate__animated animate__fadeIn">
        <img className="card-img-top" src={url} alt={title} />
        <div className="card-body">
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
};

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
