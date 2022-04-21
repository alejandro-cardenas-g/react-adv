import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';



export const FormikAbstract = () => {

    return (
        <div>

            <h1>FormikAbstract</h1>

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

                            <MyTextInput name="firstName" label="First Name" placeholder='First Name'/>
                            <MyTextInput name="lastName" label="Last Name" placeholder='Last Name'/>
                            <MyTextInput name="email" label="Email" placeholder='Email'/>
                            <MySelect name="jobType" label="Job Type">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </MySelect>

                            <MyCheckbox label='Terms and Conditions' name='terms'/>
            
                            <button type="submit">Send</button>
            
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
