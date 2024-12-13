import * as React from 'react';
import { PaymentMethodProps } from './types';
import './PaymentMethod.css'; // Import the CSS file

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="payment-method" // Apply the CSS class
  />
);
