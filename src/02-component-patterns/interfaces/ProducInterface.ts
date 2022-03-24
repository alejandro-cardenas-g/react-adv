import { NumericLiteral } from 'typescript';
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
    maxCount?: number
}

export interface IProductCardHocProps{
    ({ product, children }: IProductCardProps): JSX.Element,
    Title: (Props: IProductTitleProps ) => JSX.Element,
    Image: (Props: IProductImageProps) => JSX.Element,
    Buttons: (Props:IProductButtons) => JSX.Element
}

export interface IOnChangeArgs {
    product: IProduct,
    count: number
}

export interface IInitialValues{
    count?:number,
    maxCount?:number
}

export interface IProductCardHandlers{
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: IProduct,
    increaseBy: (value: number) => void,
    reset: () => void
}