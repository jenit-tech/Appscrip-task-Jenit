import * as React from "react";
import { LanguageSelectorProps } from "./types";
import "./LanguageSelector.css";  // Import the CSS file

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, icon }) => (
  <div className="language-selector">
    <div className="language-text">{language}</div>
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="language-icon"
    />
  </div>
);
