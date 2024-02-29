import { useContext } from "react";
import { PopupContext } from "./popupContext";

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopup debe usarse dentro de un PopupProvider');
    }
    return context;
};
