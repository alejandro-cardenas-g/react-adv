import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { IProductContextProps,IProducCardProps } from '../interfaces/ProducInterface';
import {ProductButtons,ProductImage,ProductTitle} from './'

export const productContext = createContext({} as IProductContextProps);

const { Provider } = productContext;

export const ProductCard = ({ product, children }: IProducCardProps) => {

    const {counter, increaseBy} = useProduct();

    return (

        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

            <div className={ styles.productCard }>
                
                {children}
                {/* <ProductImage img={ product.img }/>

                <ProductTitle title={ product.title } />

                <ProductButtons counter={counter} increaseBy={increaseBy}/> */}

            </div>

        </Provider>

    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
