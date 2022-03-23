import { useEffect, useRef, useState } from "react";
import { IOnChangeArgs, IProduct } from "../interfaces/ProducInterface";

interface IuseProductArgs{
    product: IProduct,
    onChange?: (args: IOnChangeArgs) => void,
    value?: number
}

export const useProduct = ({product, onChange, value = 0}: IuseProductArgs) => {

    const [counter, setCounter] = useState(value);

    const isControlled = useRef( !!onChange );

    useEffect(() => {
        setCounter(value);
    }, [value, setCounter])
    
    const increaseBy = (factor: number) => {

        if(isControlled.current) {
            
            // return onChange &&  onChange({count: value, product});
            return onChange!({count: factor, product});
        }

        const newValue = Math.max(counter + value, 0);
        setCounter(prev => Math.max(prev + value, 0));
        
        onChange && onChange({count: newValue, product});
    }

    return {counter, increaseBy};

}
