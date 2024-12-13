import * as React from "react";
import { ProductCard } from "./ProductCard";
import { ProductRowProps } from "./types";
import "./ProductRow.css"; // Import the CSS file

export const ProductRow: React.FC<ProductRowProps> = ({ products }) => {
  return (
    <div className="product-row">
      <div className="product-row-content">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
