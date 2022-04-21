import { ErrorMessage, useField } from "formik"

interface IProps {
    label: string;
    name: string;
    [x: string]: any;
}

export const MySelect = ({ label, ...props }: IProps) => {

    const [field, /*meta*/] = useField(props);

    return (
        <>

            <label htmlFor={ props.id || props.name }>{label}</label>
            <select {...field} {...props}/>
            <ErrorMessage name={props.name} component='span' className="custom-error-class"/>
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}

        </>
    )
}
