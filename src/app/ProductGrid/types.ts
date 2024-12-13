export interface ProductCardProps {
    imageSrc: string;
    isNew?: boolean;
    productName: string;
    iconSrc: string;
  }
  
  export interface ProductRowProps {
    products: ProductCardProps[];
  }