import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: {title?: string} ) => {

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
        <span className={styles.productDescription}>{titleToShow}</span>
    )
}