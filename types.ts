export interface MenuItemType {
  name: string;
  description: string;
  price: string;
  image: string; // Added image property
  special?: boolean;
  type: 'SMASH' | 'GOURMET';
}

export interface SideItemType {
    name: string;
    price: string;
}

export interface DrinkItemType {
    name: string;
    price: string;
}