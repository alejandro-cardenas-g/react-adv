import logo from '../logo.svg';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import {LazyPage1,LazyPage2,LazyPage3} from '../01-lazyload/pages';

export const Navigation = () => {
    return (
        
        <BrowserRouter>
            
            <div className="main-layout">

                <nav>

                    <img src={logo} alt="react-logo"/>

                    <ul>

                        <li>
                            <NavLink to="/lazy1" activeClassName="nav-active" exact>lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" activeClassName="nav-active" exact>lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" activeClassName="nav-active" exact>lazy3</NavLink>
                        </li>

                    </ul>

                </nav>

                <Switch>
                
                    <Route path='/lazy1'>
                        <LazyPage1/>
                    </Route>  
                    <Route path='/lazy2'>
                        <LazyPage2/>
                    </Route>  
                    <Route path='/lazy3'>
                        <LazyPage3/>
                    </Route>  
                    <Redirect to="/home"/>

                </Switch>

            </div>
        
        </BrowserRouter>

    )
}
