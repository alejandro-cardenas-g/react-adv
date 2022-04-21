import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';

import {FormikAbstract,FormikBasicPage,FormikComponents,FormikYupPage,RegisterPage} from '../03-forms/pages'

export const Navigation = () => {
    return (
        
        <BrowserRouter>
            
            <div className="main-layout">

                <nav>

                    <img src={logo} alt="react-logo"/>

                    <ul>

                        <li>
                            <NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active': '' }>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik - Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({isActive}) => isActive ? 'nav-active': '' }>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik - Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik - components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstract" className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik - abstract</NavLink>
                        </li>

                    </ul>

                </nav>

                <Routes>
                
                    <Route path='/formik-basic' element={<FormikBasicPage/>}/>
                    <Route path='/formik-yup' element={<FormikYupPage/>}/>
                    <Route path='/users' element={<h1>Users</h1>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                    <Route path='/formik-components' element={<FormikComponents/>}/>
                    <Route path='/formik-abstract' element={<FormikAbstract/>}/>
                    <Route path='/*' element={ <Navigate to="/users" replace /> }/>

                </Routes>

            </div>
        
        </BrowserRouter>

    )
}
