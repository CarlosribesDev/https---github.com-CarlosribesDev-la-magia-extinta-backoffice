import { PopupType, usePopup } from '@/hooks';
import { on } from 'events';
import { useState, useEffect } from 'react'
import { IconType } from 'react-icons'
import { FaCheckCircle,FaInfoCircle  } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { MdOutlineError } from "react-icons/md";


const iconMap = new Map<PopupType, IconType>([
    [PopupType.SUCCESS, FaCheckCircle],
    [PopupType.INFO, FaInfoCircle],
    [PopupType.WARNING, IoIosWarning],
    [PopupType.ERROR, MdOutlineError],
]);

const colorMap = new Map<PopupType, string>([
    [PopupType.SUCCESS, 'text-green-500'],
    [PopupType.INFO, 'text-blue-500'],
    [PopupType.WARNING, 'text-yellow-500'],
    [PopupType.ERROR, 'text-red-500'],
]);

export const Popup = () => {
    const { popup, hidePopup } = usePopup();
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (popup) {
            setIsVisible(true);
            // Activar la animación después de un breve retraso
            setTimeout(() => setIsActive(true), 10);
        } else {
            setIsActive(false);
            // Esperar a que termine la animación para remover el componente del DOM
            setTimeout(() => setIsVisible(false), 300);
        }
    }, [popup]);

    if (!popup) return null;

    const Icon = iconMap.get(popup.type) || FaInfoCircle;
    const iconColorClass = colorMap.get(popup.type) || 'text-blue-500';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50" onClick={hidePopup}></div>
            <div className={`bg-white p-5 rounded-lg shadow-xl z-50 transition-all duration-1000 transform-gpu ${isActive ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                <header className='flex flex-row justify-between items-center w-full mb-4 border-b-2'>
                    <h2 className="text-2xl font-semibold pb-2">{popup.title} </h2>
                    <Icon className={`w-10 h-10 pb-2 ${iconColorClass}`} />
                </header>
                <p className="mb-4">{popup.message}</p>
                
                { popup.onSubmit ? 
                    <div className="flex justify-between p-4">
                        <button 
                            onClick={popup.onSubmit} 
                            className="button-1"
                        >
                            Aceptar
                        </button>
                        <button 
                            onClick={hidePopup} 
                            className="button-2"
                        >
                            Cancelar
                        </button>
                    </div>
                    :
                    <div className="flex justify-center">
                        <button 
                            onClick={hidePopup} 
                            className="button-1"
                        >
                            Aceptar
                        </button>
                    </div>
                }
                    
                
            </div>
        </div>
    );
}

