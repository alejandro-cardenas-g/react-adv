import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface IRoute{

    to: string,
    path: string,
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string

}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));

export const routes: IRoute[] = [
    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'lazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]