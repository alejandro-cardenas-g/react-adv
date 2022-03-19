import {ProductButtons,ProductImage,ProductTitle,ProductCard} from '../components/'

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

                <ProductCard product={Product}>
                    <ProductCard.Image/>
                    <ProductCard.Title title={"Título 2"}/>
                    <ProductCard.Buttons/>
                </ProductCard>

                <ProductCard product={Product}>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>
                </ProductCard>

            </div>

        </div>
    )
}
