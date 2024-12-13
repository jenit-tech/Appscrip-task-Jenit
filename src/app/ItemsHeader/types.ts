export interface ItemCountProps {
    count: number;
  }
  
  export interface FilterToggleProps {
    iconSrc: string;
    text: string;
    onClick: () => void;
  }
  
  export interface SortingProps {
    text: string;
    iconSrc: string;
  }