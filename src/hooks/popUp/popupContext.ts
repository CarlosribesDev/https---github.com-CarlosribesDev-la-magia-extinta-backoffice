import{ createContext } from 'react';
import { PopupContextProps } from './popupTypes';

const defaultPopupContext: PopupContextProps = {
    popup: null,
    showPopup: () => {},
    hidePopup: () => {}
};

export const PopupContext = createContext<PopupContextProps>(defaultPopupContext);
