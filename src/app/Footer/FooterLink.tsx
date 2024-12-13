import * as React from 'react';
import { FooterLinkProps } from './types';
import './FooterLink.css'; // Import the CSS file

export const FooterLink: React.FC<FooterLinkProps> = ({ text }) => (
  <div className="footer-link">{text}</div> // Apply the CSS class
);
