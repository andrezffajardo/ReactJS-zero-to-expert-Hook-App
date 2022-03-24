import { useState } from 'react';

export const useCounter = ( initState = 10 ) => {

    const [counter, setCounter] = useState(initState); //10

    const increment = () => {
        setCounter(counter + 1 );
    }

    const decrement = () => {
        setCounter(counter - 1 );
    }

    const reset = () => {
        setCounter( initState );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    };

};
