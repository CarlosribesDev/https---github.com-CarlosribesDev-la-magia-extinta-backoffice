import { createContext } from "react";

export const GlobalContext = createContext({
    isOpen: false,
    isLoged: false,
    toggleMenu: () => {}
});

