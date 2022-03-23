import { useEffect, useState } from "react";
import { IOnChangeArgs, IProduct } from "../interfaces/ProducInterface";

interface IuseProductArgs{
    product: IProduct,
    onChange?: (args: IOnChangeArgs) => void,
    value?: number
}

export const useProduct = ({product, onChange, value = 0}: IuseProductArgs) => {

    const [counter, setCounter] = useState(value);

    useEffect(() => {
        setCounter(value);
    }, [value, setCounter])
    
    const increaseBy = (factor: number) => {


        const newValue = Math.max(counter + factor, 0);
        setCounter(prev => Math.max(prev + factor, 0));
        
        onChange && onChange({count: newValue, product});
    }

    return {counter, increaseBy};

}
