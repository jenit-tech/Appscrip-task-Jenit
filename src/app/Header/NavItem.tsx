import * as React from "react";
import { NavItemProps } from "./types";
import "./NavItem.css";  // Import the CSS file

export const NavItem: React.FC<NavItemProps> = ({ label, width }) => (
  <div className={`nav-item ${width}`}>
    {label}
  </div>
);
