import { useField } from "formik"

interface IProps {
    label: string;
    name: string;
    [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: IProps) => {

    const [field, meta] = useField({ type:'checkbox' ,...props });

    return (
        <>

            <label>
                <input type="checkbox" {...field} {...props}/>
                {label}
            </label>
            {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            }

        </>
    )
}
