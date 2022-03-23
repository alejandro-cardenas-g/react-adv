import { useState } from "react";
import { IProduct } from '../interfaces/ProducInterface';

interface IProductInCart extends IProduct{
    count: number
};

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]:IProductInCart} >({});
    const onProductCountChange = ({count, product}:{count: number, product: IProduct}) => {
        setShoppingCart(prev => {

            // const newObject = {
            //     ...prev,
            //     [product.id]: {
            //         ...product, 
            //         count
            //     }
            // };
            
            // (count<1) && delete newObject[product.id];

            // return newObject;
            
            const productInCart: IProductInCart = prev[product.id] || {...product, count: 0};

            if(Math.max(productInCart.count + count, 0) > 0){
                return {
                    ...prev,
                    [productInCart.id]: {
                        ...productInCart, count: productInCart.count + count
                    }
                };
            }else{
                const {[productInCart.id]:productoToDelete, ...rest} = prev;
                return {...rest};
            }

        });
    }

    return {
        shoppingCart,
        onProductCountChange
    }

}
