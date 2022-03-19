import { IProps as IProductButtons } from '../components/ProductButtons';
import { IProps as IProductCardProps} from '../components/ProductCard';
import { IProps as IProductImageProps } from '../components/ProductImage';
import { IProps as IProductTitleProps} from '../components/ProductTitle';

export interface IProduct {
    id: string,
    title: string,
    img?: string
};

export interface IProductContextProps {
    counter: number
    increaseBy: (value:number) => void
    product: IProduct
}

export interface IProductCardHocProps{
    ({ product, children }: IProductCardProps): JSX.Element,
    Title: (Props: IProductTitleProps ) => JSX.Element,
    Image: (Props: IProductImageProps) => JSX.Element,
    Buttons: (Props:IProductButtons) => JSX.Element
}