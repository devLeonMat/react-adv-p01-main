import {lazy, LazyExoticComponent} from "react";
import {NoLazy} from "../lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const lazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../lazyload/layout/LazyLayout'));
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/'../lazyload/pages/LazyPage2'));
const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/'../lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: lazyLayout,
        name: 'Dashboard'
    }, {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]
