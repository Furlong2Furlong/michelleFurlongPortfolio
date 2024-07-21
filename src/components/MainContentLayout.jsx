import PropTypes from "prop-types";

export default function MainContentLayout({ title, children }) {
  MainContentLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  };
  return (
    <div className="main-content-layout">
      <div className="main-content-header">
        <h1>{title}</h1>
      </div>
      <div className="content-body">
        <div className="text-column">
          {children[0]} {/* Assuming the first child is the text content */}
        </div>
        <div className="image-column">
          {children[1]} {/* Assuming the second child is the image content */}
        </div>
      </div>
    </div>
  );
}
