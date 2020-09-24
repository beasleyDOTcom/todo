import { useState } from 'react';
export default function useForm(callbackFunction){

    const [item, setItem] = useState({});

    const handleInputChange = event => {
        // event.persist();
        setItem({ ...item, [event.target.name]: event.target.value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(item, 'item is here')

        event.target.reset();
        ///////////// I don't know why having e.target.reset() is giving me so much trouble
        // props.handleSubmit(item);
        callbackFunction(item)
        // const item = {};
        setItem({});
    }

    return { 
        handleSubmit,
        handleInputChange,
    }
}