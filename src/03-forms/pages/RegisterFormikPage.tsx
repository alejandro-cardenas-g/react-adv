import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div className="">
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                    .required('El nombre es obligatorio')
                                    .min(2, 'El nombre debe ser de mínimo 3 carácteres')
                                    .max(15, 'El nombre debe ser de máximo 15 carácteres'),
                        email: Yup.string()
                                    .email('El email debe ser válido')
                                    .required('El email es obligatorio'),
                        password1: Yup.string()
                                    .required('El password es obligatorio')
                                    .min(6, 'Mínimo 6 carácteres'),
                        password2: Yup.string()
                                    .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                                    .required('El password es obligatorio')
                    })
                }
            >

                {
                    ({handleReset}) => (
                        
                        <Form>

                            <MyTextInput label='nombre' name='name' placeholder='nombre'/>
                            <MyTextInput label='email' name='email' placeholder='email' type='email'/>
                            <MyTextInput label='Contraseña' name='password1' placeholder='Contraseña' type='password'/>
                            <MyTextInput label='Repetir Contraseña' name='password2' placeholder='Contraseña' type='password'/>

                            <button type="submit">Create</button>
                            <button onClick={handleReset}>Reset</button>

                        </Form>

                    )
                }
                


            </Formik>



                
        </div>
    )
}