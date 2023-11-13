import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { SidebarProvider } from '../../context/SidebarProvider';
import './layout.scss';

const Layout: React.FC = () => {
    return (
        <SidebarProvider>
            <div className='grid_container'>
                <Header />
                <Sidebar />
                <Outlet />
            </div>
        </SidebarProvider>
    )
}

export default Layout
