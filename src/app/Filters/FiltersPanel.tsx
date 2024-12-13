// FiltersPanel.tsx
import * as React from "react";
import { FilterSection } from "./FilterSection";
import { Divider } from "./Divider";
import "./FiltersPanel.css";  // Import the CSS file for styles

const filterSections = [
  { title: "IDEAL FOR", value: "All", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/32bf7102853f26de22012b3e5b490446d1d784ff29a1d71b9af000fb9a593b81?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22" },
  { title: "occasion", value: "All", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22" },
  { title: "work", value: "All", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22" },
  { title: "fabric", value: "All", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22" },
  { title: "segment", value: "All", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22" },
  { title: "suitable for", value: "All", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22" },
  { title: "raw materials", value: "All", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22" },
  { title: "Pattern", value: "All", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22" }
];

export const FiltersPanel: React.FC = () => {
  return (
    <div className="filters-panel">
      <div className="filters-panel-header">
        <div className="filters-panel-title">
          <div className="filters-panel-icon" />
          <div className="filters-panel-content">Customizble</div>
        </div>
      </div>
      <Divider />
      {filterSections.map((section, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col mt-6 w-full whitespace-nowrap">
            <FilterSection
              title={section.title}
              value={section.value}
              icon={section.icon}
            />
          </div>
          <Divider />
        </React.Fragment>
      ))}
    </div>
  );
};
