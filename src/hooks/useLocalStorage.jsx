import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {

    const localValue = JSON.parse(localStorage.getItem(key));

    const [darkMode, setDarkMode] = useState(()=>{

    if (localValue) {
        return localValue
    } else {
        localStorage.setItem(key, JSON.stringify(initialValue))
    }
    });

    const changeHandler = (value) => {
        setDarkMode(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [darkMode ,changeHandler]
} 