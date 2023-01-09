import { useState } from 'react';

export function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            localStorage.setItem(key, JSON.stringify(initialValue));
            const item = window.localStorage.getItem(key);
            //console.log("item", item)
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            //console.log(error);
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            //console.log("value", value)
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };

    //console.log("storedValue", storedValue)

    return [storedValue, setValue];
}   