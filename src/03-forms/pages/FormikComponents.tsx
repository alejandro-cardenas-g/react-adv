import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>

            <h1>FormikComponents</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                        .max(15, 'Debe de tener 15 caracteres o menos')
                                        .required('required'),
                        lastName: Yup.string()
                                        .max(10, 'Debe de tener 10 caracteres o menos')
                                        .required('required'),
                        email: Yup.string()
                                    .email('Email not valid')
                                    .required('required'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'must accept the terms and conditions'),
                        jobType: Yup.string()
                                    .required('required')
                                    .notOneOf(['it-junior'], 'This option is not allowed'),
                    })
                }
            >
                {
                    (formik) => (
                        <Form>

                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name='firstName' component='span'/>
            
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name='lastName' component='span'/>
                            
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name='email' component='span'/>

                            <label htmlFor="jobType">JobType</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component='span'/>

                            <label>
                                <Field name="terms" type="checkbox"/>
                                Terms and conditions
                            </label>
                            <ErrorMessage name='terms' component='span'/>
            
                            <button type="submit">Send</button>
            
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
