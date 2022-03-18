import { NavLink, Redirect, Route, Switch, useRouteMatch } from "react-router-dom"

import {LazyPage1,LazyPage2,LazyPage3} from '../pages';

export const Navigation = () => {

    const { path, url } = useRouteMatch();
    console.log(url, path);
    return (
        <>
            <ul>

                <li>
                    <NavLink to={`${url}/lazy1`}>LazyPage1</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/lazy2`}>LazyPage2</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/lazy3`}>LazyPage3</NavLink>
                </li>

            </ul>

            <Switch>

                <Route 
                    exact
                    path={`${path}/lazy1`}
                >
                    <LazyPage1/>
                </Route>
                <Route 
                    exact
                    path={`${path}/lazy2`}
                >
                    <LazyPage2/>
                </Route>
                <Route 
                    exact
                    path={`${path}/lazy3`}
                >
                    <LazyPage3/>
                </Route>

                <Redirect to={`${path}/lazy1`}/>

            </Switch>
        </>
    )
}
