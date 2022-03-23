import {ProductButtons,ProductImage,ProductTitle,ProductCard} from '../components/';
import { useShoppingCart } from '../hooks/useShoppingCart';
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

export const ShoppingPage = () => {

    const { shoppingCart,onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr/>

            <div style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }
            }>
                

                {
                    Products.map(producto => {

                        return(
                            <ProductCard 
                                key={producto.id}
                                product={producto} className="bg-dark"
                                onChange={ (evento) => onProductCountChange(evento) }
                                // value={Object.entries(shoppingCart).map(([key, product]) => {
                                //     if(producto.id === product.id) return product.count
                                // })[0]}
                                value={shoppingCart[producto.id]?.count || 0}
                            >
                                <ProductImage className="custom-image"/>
                                <ProductTitle className="text-white"/>
                                <ProductButtons className="custom-botton"/>
                            </ProductCard>
                        )

                    })
                }

                <div className="shopping-cart">
                    {
                        Object.entries(shoppingCart).map(([key, product]) =>{ 

                            return(
                                <ProductCard 
                                    key={key}
                                    product={product} className="bg-dark"
                                    style={{width: '100px'}}
                                    onChange={ onProductCountChange }
                                    value={ product.count }
                                >
                                    <ProductImage className="custom-image"/>
                                    <ProductTitle className="text-white"/>
                                    <ProductButtons className="custom-botton"
                                        style={{
                                            display:'flex',
                                            justifyContent: 'center'
                                        }}
                                    />
                                </ProductCard>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}
