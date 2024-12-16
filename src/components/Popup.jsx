import React from "react";
import "../components/style.css";

const Popup = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null; 

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <div>{children}</div>
        <button className="popup-close" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Popup;
