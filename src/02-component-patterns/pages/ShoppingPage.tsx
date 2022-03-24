import {ProductButtons,ProductImage,ProductTitle,ProductCard} from '../components/';
import { IProduct } from '../interfaces/ProducInterface';
import '../styles/custom-styles.css';

// const Product = {
//     id: '1',
//     title: 'coffee-mug - card',
//     img: './coffee-mug.png'
// }

// const Product2 = {
//     id: '2',
//     title: 'coffee-mug2 - card',
//     img: './coffee-mug2.png'
// }

const Products:IProduct[] = [
    {
        id: '1',
        title: 'coffee-mug - card',
        img: './coffee-mug.png'
    },
    {
        id: '2',
        title: 'coffee-mug2 - card',
        img: './coffee-mug2.png'
    }
];

const producto = Products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr/>
                
            <ProductCard 
                key={producto.id}
                product={producto} 
                className="bg-dark"
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {
                    ({count,increaseBy,isMaxCountReached,product,reset,maxCount}) => (

                        <>
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="custom-botton"/>


                            <button onClick={reset}>Reset</button>
                            <button onClick={() =>increaseBy(-2)}>-2</button>
                            {!isMaxCountReached
                                &&<button onClick={() =>increaseBy(2)}>+2</button>
                            }
                            <span>{count}</span>
                        </>

                    )
                }

            </ProductCard>

        </div>
    )
}
