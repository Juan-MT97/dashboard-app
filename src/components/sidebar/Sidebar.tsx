import SidebarItem from './components/sidebarItem/SidebarItem';
import SidebarTitle from './components/sidebarTitle/SidebarTitle';
import { BsGrid1X2Fill, BsPeopleFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';
import './sidebar.scss';

const Sidebar: React.FC = () => {
  const sidebarContext = useContext(SidebarContext);

  return (
    <aside id='sidebar' className={sidebarContext.showSidebarButton ? 'sidebar_responsive' : ''}>
      <SidebarTitle icon={<BsGrid1X2Fill className='icon_header' />} text='Dashboard' />
      <ul className='sidebar_list'>
        <SidebarItem redirectTo={'/'} icon={<BsPeopleFill className='icon' />} text='Clients' />
        <SidebarItem redirectTo={'/analytics'} icon={<BsFillGrid3X3GapFill className='icon' />} text='Analytics' />
      </ul>
    </aside>
  )
}

export default Sidebar
