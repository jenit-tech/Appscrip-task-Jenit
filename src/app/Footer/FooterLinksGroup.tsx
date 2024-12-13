import * as React from 'react';
import { FooterLink } from './FooterLink';
import { FooterLinksGroupProps } from './types';
import './FooterLinksGroup.css'; // Import the CSS file

export const FooterLinksGroup: React.FC<FooterLinksGroupProps> = ({ title, links }) => (
  <div className="footer-links-group footer-links-group-margin">
    <div className="footer-links-group-title">{title}</div>
    <div className="footer-links-group-list">
      {links.map((link, index) => (
        <FooterLink key={index} text={link} />
      ))}
    </div>
  </div>
);
