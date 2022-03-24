import { useEffect, useRef, useState } from "react";
import { IOnChangeArgs, IProduct, IInitialValues } from '../interfaces/ProducInterface';

interface IuseProductArgs{
    product: IProduct,
    onChange?: (args: IOnChangeArgs) => void,
    value?: number,
    initialValues?: IInitialValues
}

export const useProduct = ({product, onChange, value = 0, initialValues}: IuseProductArgs) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value );

    const isMounted = useRef(false);

    useEffect(() => {
        if(!isMounted.current) return;

        setCounter(value);

    }, [value, setCounter]);

    
    useEffect(() => {
        isMounted.current = true;
      }, [])

    const increaseBy = (factor: number) => {

        let newValue = Math.max(counter + factor, 0);
        if(initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues.maxCount);
        }
        setCounter(newValue);
        
        onChange && onChange({count: newValue, product});
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    return {
        counter, 
        increaseBy,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        reset
    };

}
