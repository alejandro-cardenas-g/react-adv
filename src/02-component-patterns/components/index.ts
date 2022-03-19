import { IProductCardHocProps } from "../interfaces/ProducInterface";
import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from './ProductTitle';

export { ProductTitle } from "./ProductTitle";
export { ProductImage } from './ProductImage';
export { ProductButtons } from "./ProductButtons";

export const ProductCard:IProductCardHocProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});