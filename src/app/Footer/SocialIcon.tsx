import * as React from 'react';
import { SocialIconProps } from './types';
import './SocialIcon.css'; // Import the CSS file

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="social-icon" // Apply the CSS class
  />
);
