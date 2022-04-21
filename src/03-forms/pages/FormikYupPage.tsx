import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {

    const {
        handleSubmit, 
        errors, 
        touched, 
        getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('required'),
            lastName: Yup.string()
                            .max(10, 'Debe de tener 10 caracteres o menos')
                            .required('required'),
            email: Yup.string()
                        .email('Email not valid')
                        .required('required')
        })
    });

    return (
        <div>

            <h1>Formik Yup</h1>

            <form noValidate onSubmit={handleSubmit}>

                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    {...getFieldProps('firstName')}
                />
                { (errors.firstName && touched.firstName) && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    {...getFieldProps('lastName')}
                />
                { (errors.lastName && touched.lastName) && <span>{errors.lastName}</span>}
                
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    {...getFieldProps('email')}
                />
                { (errors.email && touched.email) && <span>{errors.email}</span>}

                <button type="submit">Send</button>

            </form>

        </div>
    )
}
