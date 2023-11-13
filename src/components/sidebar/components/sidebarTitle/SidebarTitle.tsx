import { ReactNode, useContext } from 'react';
import { SidebarContext } from '../../../../context/SidebarContext';
import closeIcon from '../../../../assets/cross.svg';
import './sidebarTitle.scss';

interface SidebarTitleProps {
    icon: ReactNode;
    text: string;
}

export const SidebarTitle: React.FC<SidebarTitleProps> = ({ icon, text }) => {
    const sidebarContext = useContext(SidebarContext);

    return (
        <div className='sidebar_title'>
            <div className='sidebar_logo'>
                {icon}
                {text}
            </div>
            <img src={closeIcon} alt='Close Sidebar Icon' className='icon_close' onClick={sidebarContext.openSidebar} />
        </div>
    )
}

export default SidebarTitle
