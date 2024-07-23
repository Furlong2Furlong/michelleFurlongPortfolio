import PropTypes from "prop-types";

import "../components/imageGrid.css";

export default function ImageGrid({ images }) {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div className="image-grid-item" key={index}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
}

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired,
};
