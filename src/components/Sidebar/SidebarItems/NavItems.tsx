import HouseIcon from '@mui/icons-material/House';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupsIcon from '@mui/icons-material/Groups';

const Content = [
    {
        name: 'Página Inicial',
        path: '/home',
        icon: <HouseIcon />
    },
    {
        name: 'Explorar',
        path: '/explore',
        icon: <SearchIcon />
    },
    {
        name: 'Notificações',
        path: '/notifications',
        icon: <NotificationsIcon />
    },
    {
        name: 'Comunidades',
        path: '/comunity',
        icon: <GroupsIcon />
    }
];

export default Content;