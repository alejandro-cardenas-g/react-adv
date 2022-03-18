import logo from '../logo.svg';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        
        <BrowserRouter>
            
            <div className="main-layout">

                <nav>

                    <img src={logo} alt="react-logo"/>

                    <ul>

                        <li>
                            <NavLink to="/home" activeClassName="nav-active" exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="nav-active" exact>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
                        </li>

                    </ul>

                </nav>

                <Switch>
                
                    <Route path='/about'>
                        <h1>About</h1>
                    </Route>  
                    <Route path='/users'>
                        <h1>Users</h1>
                    </Route>  
                    <Route path='/home'>
                        <h1>Home</h1>
                    </Route>  
                    <Redirect to="/home"/>

                </Switch>

            </div>
        
        </BrowserRouter>

    )
}
