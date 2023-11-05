import { useState, useEffect } from 'react';

type ReturnType<T> = [
    T | undefined,
    (value: T | ((val: T | undefined) => T | undefined)) => void,
];

function useStorage<T>(key: string, initialValue?: T): ReturnType<T> {
    const [storedValue, setStoredValue] = useState<T | undefined>(initialValue);

    useEffect(() => {
        try {
            const storageObject =
                typeof window !== 'undefined' ? localStorage : undefined;
            const item = storageObject?.getItem(key);
            const value = item ? (JSON.parse(item) as T) : initialValue;
            if (value !== undefined) {
                setStoredValue(value);
            }
        } catch (error) {
            console.error(error);
            setStoredValue(initialValue);
        }
    }, [key, initialValue]);

    const setValue = (value: T | ((val: T | undefined) => T | undefined)) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

export default useStorage;
