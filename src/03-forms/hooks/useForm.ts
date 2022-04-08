import { useState } from 'react';

export const useForm = <T> ( initialState: T ) => {

    const [data, setData] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    };

    const resetForm = () => {
        setData({...initialState});
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...data,
        data,
        handleChange,
        resetForm,
        isValidEmail
    }

}
