import { useFormik } from 'formik';
import '../styles/styles.css';

export const FormikBasicPage = () => {

    const {handleChange, values, handleSubmit} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div>

            <h1>Formik Basic</h1>

            <form noValidate onSubmit={handleSubmit}>

                <label htmlFor="firstName">First Name</label>
                <input name="firstName" type="text" value={values.firstName} onChange={handleChange}/>
                <span>First name is required</span>

                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" type="text" value={values.lastName} onChange={handleChange}/>
                <span>Last name is required</span>
                
                <label htmlFor="email">Email</label>
                <input name="email" type="text" value={values.email} onChange={handleChange}/>
                <span>Email is not valid</span>
                <span>Email is required</span>

                <button type="submit">Send</button>

            </form>

        </div>
    )
}
