import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { IProductContextProps, IProduct, IOnChangeArgs, IInitialValues, IProductCardHandlers } from '../interfaces/ProducInterface';

export const productContext = createContext({} as IProductContextProps);

const { Provider } = productContext;

export interface IProps{
    product: IProduct,
    // children?: ReactElement | ReactElement[],
    children: (args: IProductCardHandlers) => JSX.Element,
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: IOnChangeArgs) => void,
    value?: number,
    initialValues?: IInitialValues
};

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues}: IProps) => {

    const {counter, increaseBy, isMaxCountReached, reset} = useProduct( { onChange, product, value, initialValues } );

    return (

        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount: initialValues?.maxCount
        }}> 

            <div className={ `${styles.productCard} ${(className) && className}` }
                style={style}
            >
                
                {
                    children({
                        count: counter,
                        isMaxCountReached: isMaxCountReached,
                        product,
                        increaseBy,
                        reset
                    }) 
                }
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
