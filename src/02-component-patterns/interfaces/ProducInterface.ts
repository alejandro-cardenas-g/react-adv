import {ReactElement} from 'react';
import { JsxChild } from 'typescript';

interface IProduct {
    id: string,
    title: string,
    img?: string
};

export interface IProducCardProps{
    product: IProduct,
    children?: ReactElement | ReactElement[]
};

export interface IProductContextProps {
    counter: number
    increaseBy: (value:number) => void
    product: IProduct
}

export interface IProductCardHocProps{
    ({ product, children }: IProducCardProps): JSX.Element,
    Title: ({title}: {title?:string}) => JSX.Element,
    Image: ({img}: {img?:string}) => JSX.Element,
    Buttons: () => JSX.Element
}