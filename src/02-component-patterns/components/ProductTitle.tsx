import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface IProps{
    title?: string, className?:string,
    style?: React.CSSProperties
}

export const ProductTitle = ({ title, className, style }: IProps ) => {

    const {product} = useContext(productContext);

    let titleToShow: string;

    if(title){
        titleToShow = title;
    }else if(product.title){
        titleToShow = product.title;
    }else{
        titleToShow = "Product Title"
    }

    return (
        <span className={`${styles.productDescription} ${(className) ? className : ''}`}
            style={style}
        >
            {titleToShow}
        </span>
    )
}