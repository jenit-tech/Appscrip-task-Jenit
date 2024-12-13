import * as React from 'react';
import { FooterLinksGroup } from './FooterLinksGroup';
import { SocialIcon } from './SocialIcon';
import { PaymentMethod } from './PaymentMethod';
import './Footer.css'; // Import the CSS file

export const Footer: React.FC = () => {
  const mettaMuseLinks = [
    "About Us",
    "Stories",
    "Artisans",
    "Boutiques",
    "Contact Us",
    "EU Compliances Docs"
  ];

  const quickLinks = [
    "Orders & Shipping",
    "Join/Login as a Seller",
    "Payment & Pricing",
    "Return & Refunds",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions"
  ];

  const paymentMethods = Array.from({ length: 6 }, (_, i) => ({
    src: `http://b.io/ext_${i + 5}-`,
    alt: `Payment method ${i + 1}`
  }));

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-column">
            <div className="text-xl font-bold text-white uppercase">
              Be the first to know
            </div>
            <div className="mt-6 text-base text-white">
              Sign up for updates from mettā muse.
            </div>
            <form className="footer-form">
            
              <input
                type="email"
                id="email"
                className="footer-form-input"
                placeholder="Enter your e-mail..."
                aria-label="Enter your email"
              />
              <button
                type="submit"
                className="footer-form-button"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="footer-column-2">
          <p className="text-xl font-bold text-white uppercase">CONTACT US</p>
  <p className="mt-4">+44 221 133 5360</p>
  <p className="mt-4">customercare@mettamuse.com</p>
  <p className="mt-6 text-xl uppercase">Currency</p>
            <div className="flex gap-1.5 items-center mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae6fae9447881f9884ffeda06e804a461afea42ce46b0fd075e6e8bab7e3ef1?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
                alt="Currency symbol"
                className="object-contain w-6 rounded-3xl aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0826f0179bf48701b79e7d666903256ed26bf87485435f6304d930dbbb5aaa9?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
                alt=""
                className="object-contain w-1.5 aspect-square"
              />
              <p>USD</p>
            </div>
            <p className="mt-4 text-xs">
    Transactions will be completed in Euros and a currency reference is available on hover.
  </p>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-links-group">
          <FooterLinksGroup title="mettā muse" links={mettaMuseLinks} />
          <div className="footer-links-group-column">
            <FooterLinksGroup title="Quick Links" links={quickLinks} />
        </div>
        </div>
        <div className="mt-9 text-sm text-center">
              Copyright © 2023 mettamuse. All rights reserved.
            </div>
        <div className="footer-social">
          <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/77b30416158346cdcb50b31ce05dca95f796b9a34ee6b8897b3d3049567236e7?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22" alt="Social media icon 1" />
          <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/10a34d4312a8598074b15b0c5ddb061da988fc74c553ff643cfe51111091a492?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22" alt="Social media icon 2" />
        </div>
        <div className="mt-14 text-xl font-bold text-white uppercase">
          mettā muse <span className="uppercase">Accepts</span>
        </div>
        <div className="footer-payment-methods">
          {paymentMethods.map((method, index) => (
            <PaymentMethod key={index} {...method} />
          ))}
        </div>
      </div>
    </div>
  );
};
