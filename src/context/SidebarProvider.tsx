import { useState } from 'react';
import { SidebarContext } from './SidebarContext';

interface SidebarProviderContextProps {
    children: JSX.Element | JSX.Element[];
}

export const SidebarProvider = ({ children }: SidebarProviderContextProps) => {
    const [showSidebarButton, setShowSidebarButton] = useState(false);

    const openSidebar = () => {
        setShowSidebarButton(!showSidebarButton);
    }

    return (
        <SidebarContext.Provider value={{showSidebarButton, openSidebar}} >
            {children}
        </SidebarContext.Provider>
    )
}
