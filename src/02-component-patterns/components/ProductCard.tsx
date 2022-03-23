import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { IProductContextProps, IProduct, IOnChangeArgs} from '../interfaces/ProducInterface';

export const productContext = createContext({} as IProductContextProps);

const { Provider } = productContext;

export interface IProps{
    product: IProduct,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: IOnChangeArgs) => void,
    value?: number
};

export const ProductCard = ({ product, children, className, style, onChange, value}: IProps) => {

    const {counter, increaseBy} = useProduct( { onChange, product, value } );

    return (

        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

            <div className={ `${styles.productCard} ${(className) && className}` }
                style={style}
            >
                
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
