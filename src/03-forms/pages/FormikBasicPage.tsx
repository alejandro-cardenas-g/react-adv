import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({email,firstName,lastName}:IFormValues) => {

        const errors:FormikErrors<IFormValues> = {};

        if(!firstName){
            errors.firstName = 'Required';
        }else if(firstName.length > 15){
            errors.firstName = 'Must be 15 characters or less';
        }

        if(!lastName){
            errors.lastName = 'Required';
        }else if(lastName.length > 10){
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;

    }

    const {handleChange, values, handleSubmit, errors, touched, handleBlur} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    });

    return (
        <div>

            <h1>Formik Basic</h1>

            <form noValidate onSubmit={handleSubmit}>

                <label htmlFor="firstName">First Name</label>
                <input name="firstName" type="text" value={values.firstName} onChange={handleChange}
                    onBlur={handleBlur}
                />
                { (errors.firstName && touched.firstName) && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" type="text" value={values.lastName} onChange={handleChange}
                    onBlur={handleBlur}
                />
                { (errors.lastName && touched.lastName) && <span>{errors.lastName}</span>}
                
                <label htmlFor="email">Email</label>
                <input name="email" type="text" value={values.email} onChange={handleChange}
                    onBlur={handleBlur}
                />
                { (errors.email && touched.email) && <span>{errors.email}</span>}

                <button type="submit">Send</button>

            </form>

        </div>
    )
}
