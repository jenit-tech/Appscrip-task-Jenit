import * as React from "react";
import { FiltersPanel } from "../Filters/FiltersPanel"; // Ensure the correct import path
import { ProductGrid } from "../ProductGrid/ProductGrid"; 
import './Items.css'

export const Items: React.FC = () => {
  return (
    <div className="items-container">
      <FiltersPanel />
     <ProductGrid/>
    </div>
  );
};
