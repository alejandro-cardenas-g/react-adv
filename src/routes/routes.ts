import { lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXElement = () => JSX.Element;

interface IRoutes{
    path: string,
    name: string,
    Component: React.LazyExoticComponent<JSXElement> | JSXElement,
    children?: IRoutes[]
};

const LazyLoad = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));

export const routes:IRoutes[] = [
    {
        path: "/lazyload",
        Component: LazyLoad,
        name: "Lazyload nested"
    },
    {
        path: "/nolazy",
        Component: NoLazy,
        name: "nolazy component"
    },
];