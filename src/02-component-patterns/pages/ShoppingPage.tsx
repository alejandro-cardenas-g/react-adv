import {ProductButtons,ProductImage,ProductTitle,ProductCard} from '../components/';
import '../styles/custom-styles.css';

const Product = {
    id: '1',
    title: 'coffee-mug - card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
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

                <ProductCard product={Product} className="bg-dark">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title title={"Título 2"} className="text-white"/>
                    <ProductCard.Buttons className="custom-botton"/>
                </ProductCard>

                <ProductCard product={Product} className="bg-dark">
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-white"/>
                    <ProductButtons className="custom-botton"/>
                </ProductCard>

                
                <ProductCard product={Product} 
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage
                        style={{
                            width: '90%',
                            paddingLeft: '5%'
                        }}
                    />
                    <ProductTitle
                        style={{
                            color: 'green'
                        }}
                    />
                    <ProductButtons
                        style={{
                            color: 'purple'
                        }}
                    />
                </ProductCard>

            </div>

        </div>
    )
}
