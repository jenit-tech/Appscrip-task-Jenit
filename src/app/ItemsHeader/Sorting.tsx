import * as React from "react";
import { SortingProps } from "./types";
import "./Sorting.css";  // Import the CSS file for styles

export const Sorting: React.FC<SortingProps> = ({ text, iconSrc }) => {
  return (
    <div className="sorting-container">
      <div className="sorting-text">{text}</div>
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="sorting-icon"
      />
    </div>
  );
};
