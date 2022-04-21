import { ErrorMessage, useField } from "formik"

interface IProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: IProps) => {

    const [field, /*meta*/] = useField(props);

    return (
        <>

            <label htmlFor={ props.id || props.name }>{label}</label>
            <input className="text-input" {...field} {...props}/>
            <ErrorMessage name={props.name} component='span' className="custom-error-class"/>
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}

        </>
    )
}
