import React from "react";
import "./Header.css";
import { NavItem } from "./NavItem";
import { LanguageSelector } from "./LanguageSelector";



const navItems = [
    { label: "SHOP", width: "52px" },
    { label: "SKILLS", width: "65px" },
    { label: "STORIES", width: "79px" },
    { label: "ABOUT", width: "65px" },
    { label: "CONTACT US", width: "119px" }
  ];
  

const headerIcons = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/2c80a796f1e46adc6dc885cdfbc4adf3ae93f5057f6cffd2837dab0833946468?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/c0c668573c2b8b722a3162e3b3e49d3eddef12fe61cc571adb92e7a0083bf2c7?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/f275c0fd3da548395ba02be2df3f5534df6935d5d427477c330dd9a25ba4fd27?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/1014cf542ee3c97bbe808712f6c7631c7eb43ccf619aec14497ad390320e2835?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
];

export const Header: React.FC = () => {
  return (
    <div className="header-container">
     
      <div className="header-main">
        <div className="header-content">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0dd93302348c3b3f46ce1118f00f7f3a21f7111b0592e8c6d6ef1f73ea3bef?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
            alt=""
            className="header-logo"
          />
          <div className="header-title">LOGO</div>
          <div className="header-icons">
            {headerIcons.map((icon, index) => (
              <img
                key={index}
                loading="lazy"
                src={icon}
                alt={`icon-${index}`}
                className="header-icon"
              />
            ))}
            <LanguageSelector 
              language="ENG"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5170181ed90c2877fe2d5a60c2aa71a775964c2bb5e7cbefac0d38add3c70eef?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
            />
          </div>
        </div>
        <div className="nav-items">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
