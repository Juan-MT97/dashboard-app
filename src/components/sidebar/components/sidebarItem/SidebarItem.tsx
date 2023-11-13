import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './sidebarItem.scss';

interface SidebarItemProps {
    redirectTo: string;
    icon: ReactNode;
    text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ redirectTo, icon, text }) => {
    return (
        <li className='sidebar_item'>
            <Link to={redirectTo}>
                {icon}
                {text}
            </Link>
        </li>
    )
}

export default SidebarItem
