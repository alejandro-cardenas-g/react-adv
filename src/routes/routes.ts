import { lazy } from 'react';

type JSXElement = () => JSX.Element;

interface IRoutes{
    path: string,
    name: string,
    Component: React.LazyExoticComponent<JSXElement> | JSXElement,
    children?: IRoutes[]
};

const LazyPage1 = lazy(() => import(/* webpackChunkName: "lazypage1" */'../01-lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import(/* webpackChunkName: "lazypage2" */'../01-lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import(/* webpackChunkName: "lazypage3" */'../01-lazyload/pages/LazyPage3'));

export const routes:IRoutes[] = [
    {
        path: "/lazy1",
        Component: LazyPage1,
        name: "LazyPage1"
    },
    {
        path: "/lazy2",
        Component: LazyPage2,
        name: "LazyPage2"
    },
    {
        path: "/lazy3",
        Component: LazyPage3,
        name: "LazyPage3"
    }
];