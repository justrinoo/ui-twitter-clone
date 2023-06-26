import SidebarItem from './SidebarItem';

export default function Sidebar() {
    return (
        <nav className='flex fixed flex-col items-start justify-between h-full'>
            <SidebarItem />
        </nav>
    );
}
