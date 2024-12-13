import * as React from "react";
import { ProductRow } from "./ProductRow";
import { ProductCardProps } from "./types";

const productData: ProductCardProps[][] = [
  [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f484506bbe36a3396467d447ff2b23e8d698279bd8b1d3d88fbd080d9e6f8521?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      isNew: true,
      productName: "PPXOC Milkyway dress in pressed flowers",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/73951bee4c48abc8ce6790b1107c4b8f9c9e507e0f12aaa01ebfba008e600bca?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/96f9469c26336245648ff4cb30fcf54a4f5b748d3198f35fe9f26410a5b3e9fb?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "PPXOC Milkyway dress in pressed flowers",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccd2fb044b4fcff05d90bf2664e74e3cb6e5849f6f3548771912fdc20fea56ff?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/40fc0aa643fe40c66b6c0832c468da6899c89355d68f81ea2bdd97d198a6c852?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    }
  ],
  [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/975b30be63075dc6008d33c05e89eb1bd1e4e1986af18b01fb47763829214dd6?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/73951bee4c48abc8ce6790b1107c4b8f9c9e507e0f12aaa01ebfba008e600bca?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ada099f10ad775551beec2f7f635a31d5fa76315113ec7dd8a396b730d939560?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2e306f2af3a414c9c1d50658f653124e4d237695ee81539b5594f4566e67f91?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    }
  ],
  [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a40744eeb25dd7fe843e4a1cce4e953c0b6fa5ac4db7900880e53f06bafa31e?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/73951bee4c48abc8ce6790b1107c4b8f9c9e507e0f12aaa01ebfba008e600bca?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f9630db5c44d8dbba68ef0cd5479bf34b069b43ddba7ae12f99da6b13c66985?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/73951bee4c48abc8ce6790b1107c4b8f9c9e507e0f12aaa01ebfba008e600bca?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e832353c5bcea88302b343eebf197842d5ddd254f9c876bd794b2cfc6b7a4d2?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/73951bee4c48abc8ce6790b1107c4b8f9c9e507e0f12aaa01ebfba008e600bca?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    }
  ],
  [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/023d01fc45b9f5b7bb56d56b9fd93c1af3b9b537c60ef3bf14feaf0b2ba6d07b?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2e75d4c39af0f16ffbd324e642074bf0520178f2e2c669b98c293556ce3db2c?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1a405e76b038756193a2ac1d5dec8a9c3bdc723e813da0552cdfc52f0402f?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    }
  ],
  [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccd2fb044b4fcff05d90bf2664e74e3cb6e5849f6f3548771912fdc20fea56ff?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/96f9469c26336245648ff4cb30fcf54a4f5b748d3198f35fe9f26410a5b3e9fb?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/975b30be63075dc6008d33c05e89eb1bd1e4e1986af18b01fb47763829214dd6?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    }
  ],
  [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e832353c5bcea88302b343eebf197842d5ddd254f9c876bd794b2cfc6b7a4d2?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ada099f10ad775551beec2f7f635a31d5fa76315113ec7dd8a396b730d939560?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1a405e76b038756193a2ac1d5dec8a9c3bdc723e813da0552cdfc52f0402f?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22",
      productName: "Product Name",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=664e86e4fc2140948e2813c9fced8f22"
    }
  ]
];

export function ProductGrid(): JSX.Element {
    return (
      <div className="product-grid">
        {productData.map((rowProducts, index) => (
          <React.Fragment key={index}>
            <div className={index > 0 ? "row-spacing" : ""}>
              <ProductRow products={rowProducts} />
            </div>
        </React.Fragment>
        ))}
      </div>
    );
  }