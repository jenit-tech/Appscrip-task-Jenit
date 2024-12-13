import * as React from "react";
import { ItemCountProps } from "./types";
import "./ItemCount.css";  // Import the CSS file for styles

export const ItemCount: React.FC<ItemCountProps> = ({ count }) => {
  return (
    <div className="item-count">
      {count} Items
    </div>
  );
};
