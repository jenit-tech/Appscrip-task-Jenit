import * as React from "react";
import { FilterToggleProps } from "./types";
import "./FilterToggle.css";  // Import the CSS file for styles

export const FilterToggle: React.FC<FilterToggleProps> = ({ iconSrc, text, onClick }) => {
  return (
    <div 
      className="filter-toggle"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="filter-toggle-icon"
      />
      <div className="filter-toggle-text">
        {text}
      </div>
    </div>
  );
};
