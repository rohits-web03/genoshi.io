import { createContext, useContext } from "react";

interface Props{
    theme:string;
    toggleTheme:()=>void;
}

export const themeContext=createContext<Props>({
    theme:'',
    toggleTheme:()=>{}
})

export function useTheme() {
    return useContext(themeContext);
}