import logo from '../logo.svg';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
// import {LazyPage1,LazyPage2,LazyPage3} from '../01-lazyload/pages';
import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
    return (
        <Suspense fallback={<h5>Loding...</h5>}>
            
            <BrowserRouter>
                
                <div className="main-layout">

                    <nav>

                        <img src={logo} alt="react-logo"/>

                        <ul>

                            {
                                routes.map(({path, name}) => {

                                    return(
                                        <li
                                            key={path}
                                        >
                                            <NavLink to={path} activeClassName="nav-active" exact>{name}</NavLink>
                                        </li>
                                    )

                                })
                            }

                            {/* <li>
                                <NavLink to="/lazy1" activeClassName="nav-active" exact>lazy1</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lazy2" activeClassName="nav-active" exact>lazy2</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lazy3" activeClassName="nav-active" exact>lazy3</NavLink>
                            </li> */}

                        </ul>

                    </nav>

                    <Switch>
                    
                        {
                            routes.map(({path, Component}) => {

                                return(
                                    <Route path={path} key={path}>
                                        <Component/>
                                    </Route> 
                                )

                            })
                        }

                        {/* <Route path='/lazy1'>
                            <LazyPage1/>
                        </Route>  
                        <Route path='/lazy2'>
                            <LazyPage2/>
                        </Route>  
                        <Route path='/lazy3'>
                            <LazyPage3/>
                        </Route>  
                        <Redirect to="/home"/> */}

                    </Switch>

                </div>
            
            </BrowserRouter>
        </Suspense>
    )
}
