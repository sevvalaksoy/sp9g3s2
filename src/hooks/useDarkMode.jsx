import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
    const [theme, setTheme] = useLocalStorage("geceModu", false);

    return[theme, setTheme];
}