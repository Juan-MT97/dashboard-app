import { createContext } from 'react';

interface SidebarContextProps {
    showSidebarButton: boolean;
    openSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextProps>({} as SidebarContextProps);
