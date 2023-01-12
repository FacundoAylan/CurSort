import { useState } from 'react';

export function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            localStorage.setItem(key, JSON.stringify(initialValue));
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };


    return [storedValue, setValue];
}   