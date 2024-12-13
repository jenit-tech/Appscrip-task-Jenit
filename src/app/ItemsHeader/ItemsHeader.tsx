'use client';  // Add this line at the top of the file

import * as React from "react";
import { ItemCount } from "./ItemCount";
import { FilterToggle } from "./FilterToggle";
import { Sorting } from "./Sorting";
import "./ItemsHeader.css";  // Import the CSS file for styles

export const ItemsHeader: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = React.useState(true);

  const handleFilterToggle = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="items-header-container">
      <div className="border-line" />
      <div className="items-header-content">
        <div className="items-header-flex">
          <div className="items-header-left">
            <ItemCount count={3425} />
            <FilterToggle
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/594071ad9d39af559486e3edea0b23370b7d5419c4f5a420c7e7dfb0c4f0a7ff?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
              text="HIDE FILTER"
              onClick={handleFilterToggle}
            />
          </div>
          <Sorting
            text="RECOMMENDED"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/32bf7102853f26de22012b3e5b490446d1d784ff29a1d71b9af000fb9a593b81?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
          />
        </div>
        <div className="border-line mt-6" />
      </div>
    </div>
  );
};
