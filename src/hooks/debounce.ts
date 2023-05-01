import {useEffect, useState} from "react";

export function useDebounce<T>(value: T, delay = 250): T {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => setDebouncedValue(value), delay);
            return () => clearTimeout(handler)
        },
        [value, delay]
    );
    return debouncedValue;
}