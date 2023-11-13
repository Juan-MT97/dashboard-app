import { BsJustify } from 'react-icons/bs';
import './header.scss';
import { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';

const Header: React.FC = () => {
    const openSidebarContext = useContext(SidebarContext);
    
    return (
        <header className='header'>
            <div className='sidebar_icon'>
                <BsJustify className='icon' onClick={openSidebarContext.openSidebar} />
            </div>
        </header>
    )
}

export default Header
