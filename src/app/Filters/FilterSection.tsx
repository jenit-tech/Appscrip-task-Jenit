// FilterSection.tsx
import * as React from "react";
import { FilterSectionProps } from "./types";
import "./FilterSection.css";  // Import the CSS file for styles

export const FilterSection: React.FC<FilterSectionProps> = ({ title, value, icon }) => {
  return (
    <div className="filter-section-container">
      <div className="filter-section-header">
        <div className="filter-section-title">{title}</div>
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="filter-section-icon"
        />
      </div>
      <div className="filter-section-value">{value}</div>
    </div>
  );
};
