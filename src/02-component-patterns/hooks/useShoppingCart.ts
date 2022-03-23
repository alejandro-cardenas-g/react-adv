import { useState } from "react";
import { IProduct } from '../interfaces/ProducInterface';

interface IProductInCart extends IProduct{
    count: number
};

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]:IProductInCart} >({});
    const onProductCountChange = ({count, product}:{count: number, product: IProduct}) => {
        setShoppingCart(prev => {

            const newObject = {
                ...prev,
                [product.id]: {
                    ...product, 
                    count
                }
            };
            
            (count<1) && delete newObject[product.id];

            return newObject;

        });
    }

    return {
        shoppingCart,
        onProductCountChange
    }

}
