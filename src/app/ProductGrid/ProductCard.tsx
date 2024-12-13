import * as React from "react";
import { ProductCardProps } from "./types";
import "./ProductCard.css"; // Import the CSS file

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  isNew,
  productName,
  iconSrc,
}) => {
  return (
    <div className="product-card">
      <div className="product-card-content">
        <div className="product-card-image-container">
          <img
            loading="lazy"
            src={imageSrc}
            alt={productName}
            className="product-card-image"
          />
          {isNew && <div className="product-new-label">new product</div>}
        </div>
        <div className="product-card-details">
          <div className="product-name">{productName}</div>
          <div className="product-pricing-info">
            <span>Sign in</span> or Create an account to see pricing
          </div>
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="product-card-icon"
          />
        </div>
      </div>
    </div>
  );
};
