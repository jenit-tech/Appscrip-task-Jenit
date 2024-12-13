// DiscoverSection.tsx
import * as React from "react";
import { DiscoverSectionProps } from "./types";
import "./DiscoverSection.css";  // Import the CSS file for styles

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({ title, description }) => {
  return (
    <div className="discover-section">
      <h1 className="discover-title">{title}</h1>
      <p className="discover-description">{description}</p>
    </div>
  );
};
